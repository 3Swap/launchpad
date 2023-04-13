import { useEffect, useMemo, useState } from "react";
import { LaunchItem } from "../../data/models";
import Countdown from "react-countdown";
import chains from "../../assets/chains.json";
import rpcCall from "../../api/rpc";
import { formatEther } from "@ethersproject/units";

/* eslint-disable @next/next/no-img-element */
type SaleItemCardProps = {
  data: LaunchItem;
  lbl: "Live" | "Ended";
};

const Timer = ({ date, completionText }: any) => {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds, completed }) => (
        <>
          {completed ? (
            <span className="font-kinn font-[700] uppercase">{completionText}</span>
          ) : (
            <span className="font-kinn text-base tracking-[0.1rem] font-[700]">
              {days} Day(s) : {hours} Hr(s) : {minutes} Min(s) : {seconds} Sec(s)
            </span>
          )}
        </>
      )}
    />
  );
};

export default function SaleItemCard({ data, lbl }: SaleItemCardProps) {
  const [percentage, setPercentage] = useState(0);
  const chain = useMemo(() => chains.find((ch) => ch.chainId === 137), []);

  useEffect(() => {
    (async () => {
      try {
        const balance = await rpcCall(chain?.rpc as string, { method: "eth_getBalance", params: [data.id, "latest"] });
        setPercentage(Math.floor((parseFloat(formatEther(balance)) * 100) / parseFloat(data.hardcap as string)));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [chain?.rpc, data.hardcap, data.id]);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 my-5 ">
          <div className="w-full bg-[rgba(0,0,0,0.25)] p-5 rounded">
            <div className="flex w-full justify-between gap-1">
              <div className="w-[10%]">
                <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-[9999px]">
                  <img src="/images/coin.svg" alt="coin" className="w-8 h-8" />
                </div>
              </div>
              <div className=" flex w-[90%] flex-col">
                <div className="flex justify-between items-center gap-2">
                  <span>
                    <h1 className="text-[14px] text-white font-kinn font-[600]">{data.tokenName}</h1>
                  </span>
                  <span
                    className={`p-2  text-white text-[10px] font-kinn font-[600] rounded ${
                      lbl === "Live" ? "text-[#36cf00] bg-[#04cf00]/[.26]" : "text-[#f71818] bg-[#f71818]/[.26]"
                    }`}
                  >
                    {lbl}
                  </span>
                </div>
                <div className="flex text-white my-2">
                  <p className="text-[12px] ">Native IDO tokens of the IDO Launchpad platform</p>
                </div>
                <div className="flex justify-between gap-2 my-2">
                  <div className="flex items-center text-white gap-1">
                    <span>
                      <img src="/images/ethereum.svg" alt="coin" className="w-full h-8" />
                    </span>
                    <span className="font-kinn font-[700]">{data.chainSymbol}</span>
                  </div>
                  <div className="flex flex-col text-white text-sm leading-tight">
                    <span className="text-[10px]">Sales ends in:</span>
                    {/* <span className="font-kinn text-md font-[600] tracking-[0.1rem]">00:12:28:04</span> */}
                    <Timer date={data.saleEndTime} completionText="Sale Ended" />
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between my-2">
                  <div className="flex w-full justify-between py-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[#9A999C] text-sm">Soft Cap:</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">
                        {data.softcap} {data.chainSymbol}
                      </span>
                    </div>
                    <div className="flex flex-col items-start w-[24%]">
                      <span className="text-[#9A999C] text-sm">Access</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">Public</span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between py-1 gap-2">
                    <div className="flex flex-col ">
                      <span className="text-[#9A999C] text-sm">Hard Cap:</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">
                        {data.hardcap} {data.chainSymbol}
                      </span>
                    </div>
                    <div className="flex flex-col items-start w-[24%]">
                      <span className="text-[#9A999C] text-sm">Liquidity</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">80%</span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between py-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[#9A999C] text-sm">Tokens Per {data.chainSymbol}:</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">
                        {data.tokensPerEther} {data.tokenSymbol}
                      </span>
                    </div>
                    <div className="flex flex-col items-start w-[24%]">
                      <span className="text-[#9A999C] text-sm">Lockup time</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">30 days</span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between py-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[#9A999C] text-sm">Max Contribution:</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">
                        {data.maxContribution} {data.chainSymbol}
                      </span>
                    </div>
                    <div className="flex flex-col items-start w-[24%]">
                      <span className="text-[#9A999C] text-sm">Lockup time</span>
                      <span className="text-[#FFD549] text-sm font-kinn font-[400]">30 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full my-3">
                  <span className="font-kinn font-[700] text-sm text-white">Progress({percentage}%)</span>
                  <div className="w-full">
                    <div className="w-full my-1">
                      <div className="h-2 bg-[#919191] rounded-[5px] w-full">
                        <div className="h-full bg-[#fff] rounded-[5px]" style={{ width: `${{ percentage }}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[#9A999C] text-[12px]">
                      <span>0 {data.chainSymbol}</span>
                      <span>
                        {data.hardcap} {data.chainSymbol}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <button className="btn bg-[#FFD549] py-2 px-5 font-kinn font-[600] rounded-md">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
