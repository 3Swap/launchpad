import { Poppins, Raleway } from "@next/font/google";
import { useEffect, useMemo, useState } from "react";
import { LaunchItem } from "../../data/models";
import Countdown from "react-countdown";
import chains from "../../assets/chains.json";
import rpcCall from "../../api/rpc";
import { formatEther } from "@ethersproject/units";

/* eslint-disable @next/next/no-img-element */
const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ weight: ["400"] });

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
            <span className="font-[700] uppercase">{completionText}</span>
          ) : (
            <span className="font-[700]">
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
    <div className="flex flex-col bg-[#000]/25 py-12 px-5 justify-center items-center gap-3">
      <div className="flex justify-evenly items-center w-full gap-4">
        <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-[9999px]">
          <img src="/images/coin.svg" alt="coin" className="w-full h-full" />
        </div>
        <span className={`text-white ${raleway.className} text-[12px] lg:text-[24px]`}>{data.tokenName}</span>
        <span
          className={`px-1 py-1 ${
            lbl === "Live" ? "text-[#36cf00] bg-[#04cf00]/[.26]" : "text-[#f71818] bg-[#f71818]/[.26]"
          }`}
        >
          {lbl}
        </span>
      </div>
      <p className={`${poppins.className} text-[#fff] text-center lg:text-justify text-[8px] lg:text-[16px]`}>
        Native IDO tokens of the IDO Launchpad platform
      </p>
      <div className="flex flex-col justify-center items-center gap-3 w-full px-14">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-4">
            <div className="w-2 h-2 lg:w-6 lg:h-6 rounded-[9999px]">
              <img src="/images/ethereum.svg" alt="coin" className="w-full h-full" />
            </div>
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>{data.chainSymbol}</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>Sale Ends In:</span>
            <div className={`text-white ${raleway.className} text-[0.8em]`}>
              <Timer date={data.saleEndTime} completionText="Sale Ended" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>Soft Cap:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[0.8em]`}>
              {data.softcap} {data.chainSymbol}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>Hard Cap:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[0.8em]`}>
              {data.hardcap} {data.chainSymbol}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>Tokens Per {data.chainSymbol}:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[0.8em]`}>
              {data.tokensPerEther} {data.tokenSymbol}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[0.9em]`}>Max Contribution:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[0.8em]`}>
              {data.maxContribution} {data.chainSymbol}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full gap-3">
        <span className={`text-white ${raleway.className} text-[0.9em]`}>Progress ({percentage}%)</span>
        <div className="flex flex-col w-full justify-center items-center gap-1">
          <div className="h-2 bg-[#919191] rounded-[2px] w-full">
            <div className="h-full bg-[#fff]" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className={`${poppins.className} text-[#fff] text-[0.8em]`}>0 {data.chainSymbol}</span>
            <span className={`${poppins.className} text-[#fff] text-[0.8em]`}>
              {data.hardcap} {data.chainSymbol}
            </span>
          </div>
        </div>
        <button
          className={`bg-[#ffd549] px-8 py-2 rounded-[5px] ${raleway.className} text-[#000] text-[7px] lg:text-[14px]`}
        >
          View
        </button>
      </div>
    </div>
  );
}
