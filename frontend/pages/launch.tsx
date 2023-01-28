import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { Interface } from "@ethersproject/abi";
import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { AddressZero } from "@ethersproject/constants";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther, formatUnits, parseEther, parseUnits } from "@ethersproject/units";
import { abi as saleCreatorAbi } from "vefi-token-launchpad-staking/artifacts/contracts/PublicTokenSaleCreator.sol/PublicTokenSaleCreator.json";
import { abi as erc20Abi } from "vefi-token-launchpad-staking/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json";
import { useWeb3Context } from "../contexts/web3";
import chains from "../assets/chains.json";
import { toast, ToastContainer } from "react-toastify";
import { Fetcher, Token } from "quasar-sdk-core";
import tokenSaleCreators from "../assets/token_sales_creators.json";
import rpcCall from "../api/rpc";

export default function Launch() {
  const { chainId, library } = useWeb3Context();
  const [hasVesting, setHasVesting] = useState(false);
  const [vestingSchedule, setVestingSchedule] = useState([[0, 0, 0, 0]]);
  const [data, setData] = useState({
    token: "",
    tokensForSale: 0,
    softCap: 0,
    hardCap: 0,
    presaleRate: 0,
    minContribution: 0,
    maxContribution: 0,
    startTime: 0,
    daysToLast: 0,
    proceedsTo: "",
    admin: ""
  });
  const chain = useMemo(() => chains.find((ch) => ch.chainId === chainId), [chainId]);
  const publicSaleCreator = useMemo(() => tokenSaleCreators[137].publicTokenSaleCreator, []);
  const [tk, setToken] = useState<Token>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isValidForm = useMemo(
    () =>
      !!data.token &&
      isAddress(data.token) &&
      isAddress(data.admin) &&
      isAddress(data.proceedsTo) &&
      data.softCap > 0 &&
      data.hardCap > 0 &&
      data.presaleRate > 0 &&
      data.maxContribution > 0 &&
      data.minContribution > 0 &&
      data.startTime > 0 &&
      data.daysToLast > 0 &&
      (hasVesting ? vestingSchedule.length > 0 : true),
    [
      data.admin,
      data.daysToLast,
      data.hardCap,
      data.maxContribution,
      data.minContribution,
      data.presaleRate,
      data.proceedsTo,
      data.softCap,
      data.startTime,
      data.token,
      hasVesting,
      vestingSchedule.length
    ]
  );

  const [saleCreationFee, setSaleCreationFee] = useState<number>(0);
  const [feePercentage, setFeePercentage] = useState<number>(0);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setData((d) => ({
        ...d,
        [e.target.name]:
          e.target.type === "number" || e.target.type === "datetime-local" || e.target.type === "date"
            ? e.target.valueAsNumber || 0
            : e.target.value
      })),
    []
  );

  const addVestingScheduleField = useCallback(() => {
    setVestingSchedule((v) => [...v, [0, 0, 0, 0]]);
  }, []);

  const removeVestingScheduleField = useCallback(
    (index: number) => {
      const mutableVestingSchedule = [...vestingSchedule];
      mutableVestingSchedule.splice(index, 1);
      setVestingSchedule(mutableVestingSchedule);
    },
    [vestingSchedule]
  );

  const handleVestingScheduleFieldChange = useCallback(
    (vestingScheduleIndex: number, itemIndex: number, value: number) => {
      const mutableVestingSchedule = [...vestingSchedule];
      const schedule = mutableVestingSchedule[vestingScheduleIndex];
      schedule.splice(itemIndex, 1, value);
      mutableVestingSchedule.splice(vestingScheduleIndex, 1, schedule);
      setVestingSchedule(mutableVestingSchedule);
    },
    [vestingSchedule]
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if (isValidForm && !!tk) {
          setIsLoading(true);
          const tokenAmount = parseUnits(data.tokensForSale.toString(), tk.decimals).toHexString();
          const presaleRate = parseUnits(data.presaleRate.toString(), tk.decimals).toHexString();
          const hardCap = parseEther(data.hardCap.toString()).toHexString();
          const softCap = parseEther(data.softCap.toString()).toHexString();
          const minContribution = parseEther(data.minContribution.toString()).toHexString();
          const maxContribution = parseEther(data.maxContribution.toString()).toHexString();
          const startTime = `0x${_.divide(data.startTime, 1000).toString(16)}`;

          const provider = new Web3Provider(library?.givenProvider);
          const tokenContract = new Contract(data.token, erc20Abi, provider.getSigner());
          const approvalTx = await tokenContract.approve(publicSaleCreator, tokenAmount);
          await approvalTx.wait();
          toast("Approved!", { type: "info" });

          const saleCreatorContract = new Contract(publicSaleCreator, saleCreatorAbi, provider.getSigner());
          let initTx;

          if (!hasVesting) {
            initTx = await saleCreatorContract.createPresale(
              [
                data.token,
                tokenAmount,
                softCap,
                hardCap,
                presaleRate,
                minContribution,
                maxContribution,
                startTime,
                data.daysToLast,
                data.proceedsTo,
                data.admin
              ],
              { value: parseEther(saleCreationFee.toString()).toHexString() }
            );
          } else {
            const vesting = _.map(vestingSchedule, (item) => [
              Math.ceil(item[0]),
              `0x${Math.floor(_.divide(item[1], 1000)).toString(16)}`,
              `0x${Math.floor(_.divide(item[2], 1000)).toString(16)}`,
              `0x${_.multiply(item[3], 60 * 60 * 24).toString(16)}`
            ]);
            initTx = await saleCreatorContract.createPresaleVestable(
              [
                data.token,
                tokenAmount,
                softCap,
                hardCap,
                presaleRate,
                minContribution,
                maxContribution,
                startTime,
                data.daysToLast,
                data.proceedsTo,
                data.admin
              ],
              vesting,
              { value: parseEther(saleCreationFee.toString()).toHexString() }
            );
          }

          await initTx.wait();
          toast("Created successfully", { type: "success" });
          setIsLoading(false);
        }
      } catch (error: any) {
        setIsLoading(false);
        toast(error.message, { type: "error" });
      }
    },
    [
      data.admin,
      data.daysToLast,
      data.hardCap,
      data.maxContribution,
      data.minContribution,
      data.presaleRate,
      data.proceedsTo,
      data.softCap,
      data.startTime,
      data.token,
      data.tokensForSale,
      hasVesting,
      isValidForm,
      library?.givenProvider,
      publicSaleCreator,
      saleCreationFee,
      tk,
      vestingSchedule
    ]
  );

  useEffect(() => {
    if (!!data.token && isAddress(data.token) && !!chain) {
      (async () => {
        try {
          const token = await Fetcher.fetchTokenData(chainId || 97, data.token, chain.rpc);
          setToken(token);
        } catch (error: any) {
          console.log(error);
        }
      })();
    }
  }, [data.token, chain, chainId]);

  useEffect(() => {
    if (!!publicSaleCreator && !!chain) {
      (async () => {
        const saleAbiInterface = new Interface(saleCreatorAbi);
        const data1 = saleAbiInterface.getSighash("saleCreationFee()");
        const data2 = saleAbiInterface.getSighash("feePercentage()");

        const fee = await rpcCall(chain.rpc, {
          method: "eth_call",
          params: [{ to: publicSaleCreator, data: data1 }, "latest"]
        });
        const percentage = await rpcCall(chain.rpc, {
          method: "eth_call",
          params: [{ to: publicSaleCreator, data: data2 }, "latest"]
        });

        setSaleCreationFee(parseFloat(formatEther(fee)));
        setFeePercentage(parseInt(percentage));
      })();
    }
  }, [chain, publicSaleCreator]);

  return (
    <div className="flex justify-center items-center py-12 px-8 w-full">
      <div className="bg-[#000]/25 flex flex-col justify-start items-center px-3 py-4 rounded-[5px] gap-8 w-full lg:w-1/4">
        <span className="font-Montserrat text-[#000]/75 font-[800] text-[24px] uppercase">Create Presale Launch</span>
        <form className="w-full flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col justify-center gap-2 w-full">
            <label className="font-poppins text-black/60 font-[600]">Token*</label>
            <input
              placeholder="Token's contract address"
              type="text"
              className="outline-0 bg-transparent border-b border-[#000] py-2 px-4 text-black flex-1"
              name="token"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 w-full">
            <label className="font-poppins text-black/60 font-[600]">Amount*</label>
            <input
              placeholder="Amount"
              type="number"
              className="outline-0 bg-transparent border-b border-[#000] py-2 px-4 text-black flex-1"
              name="token"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
