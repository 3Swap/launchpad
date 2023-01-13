import { Poppins, Raleway } from "@next/font/google";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ weight: ["400"] });

export default function SaleItemCard() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => setPercentage(Math.floor(Math.random() * 100)), []);

  return (
    <div className="flex flex-col bg-[#000]/25 py-12 px-5 justify-center items-center gap-3">
      <div className="flex justify-evenly items-center w-full gap-4">
        <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-[9999px]">
          <img src="/images/coin.svg" alt="coin" className="w-full h-full" />
        </div>
        <span className={`text-white ${raleway.className} text-[12px] lg:text-[24px]`}>
          Freight Coin Binance Smartchain
        </span>
        <span className="bg-[#04cf00]/[.26] px-1 py-1 text-[#36cf00]">Live</span>
      </div>
      <p className={`${poppins.className} text-[#fff] text-center lg:text-justify text-[8px] lg:text-[16px]`}>
        Native IDO tokens of the IDO Launchpad platform
      </p>
      <div className="flex flex-col justify-center items-center gap-3 w-full px-14">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 lg:w-6 lg:h-6 rounded-[9999px]">
              <img src="/images/ethereum.svg" alt="coin" className="w-full h-full" />
            </div>
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>ETH</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>Sale Ends In:</span>
            <span className={`text-white ${raleway.className} text-[8px] lg:text-[16px]`}>00:12:28:04</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>Soft Cap:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[8px] lg:text-[16px]`}>4 ETH</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>Hard Cap:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[8px] lg:text-[16px]`}>7 ETH</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>Tokens Per ETH:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[8px] lg:text-[16px]`}>13 FR</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>Liquidity:</span>
            <span className={`text-[#ffd549] ${raleway.className} text-[8px] lg:text-[16px]`}>4%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full gap-3">
        <span className={`text-white ${raleway.className} text-[8px] lg:text-[16px]`}>Progress ({percentage}%)</span>
        <div className="flex flex-col w-full justify-center items-center gap-1">
          <div className="h-2 bg-[#919191] rounded-[2px] w-full">
            <div className="h-full bg-[#fff]" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>0 ETH</span>
            <span className={`${poppins.className} text-[#fff] text-[8px] lg:text-[16px]`}>7 ETH</span>
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
