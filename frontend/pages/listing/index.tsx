/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import _ from "lodash";
import { Raleway, Poppins } from "@next/font/google";
import SaleItemCard from "../../components/SaleItemCard";
import { FiChevronDown } from "react-icons/fi";
import { useGraphContext } from "../../contexts/graph";
import Countdown from "react-countdown";

const raleway = Raleway({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ weight: "400" });
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

export default function Listing() {
  const { liveLaunchItems } = useGraphContext();
  return (
    <>
      <Head>
        <title>3Swap Launchpad | Listing</title>
      </Head>
      <main className="container">
        <section className="flex  w-full h-fit mx-[50px]">
          <div className="my-10 flex flex-col w-full">
            <div className="flex items-center justify-between ">
              <h1 className="font-kinn text-white text-base font-[700]">Live sales</h1>
              <div className="dropdown mr-5">
                <label tabIndex={0} className="btn m-1">
                  Select Network
                </label>
                <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-sm w-52">
                  <li className="flex">
                    <a>
                      {" "}
                      <img src="/images/ethereum.svg" alt="coin" className="w-8 h-8" /> Etherium{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                          <h1 className="text-[14px] text-white font-kinn font-[600]">VEFI Token</h1>
                        </span>
                        <span className={`p-2  text-white text-[10px] font-kinn font-[600] rounded bg-[#04cf00]/[.26]`}>
                          Live
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
                          <span className="font-kinn font-[700]">ETH</span>
                        </div>
                        <div className="flex flex-col text-white text-sm leading-tight">
                          <span className="text-[10px]">Sales ends in:</span>
                          {/* <span className="font-kinn text-md font-[600] tracking-[0.1rem]">00:12:28:04</span> */}
                          <Timer date="04/04/2023" completionText="Sale Ended" />
                        </div>
                      </div>
                      <div className="flex flex-col w-full justify-between my-2">
                        <div className="flex w-full justify-between py-1 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[#9A999C] text-sm">Soft Cap:</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">0.0000 ETH</span>
                          </div>
                          <div className="flex flex-col items-start w-[24%]">
                            <span className="text-[#9A999C] text-sm">Access</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">Public</span>
                          </div>
                        </div>
                        <div className="flex w-full justify-between py-1 gap-2">
                          <div className="flex flex-col ">
                            <span className="text-[#9A999C] text-sm">Hard Cap:</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">2000 SAP</span>
                          </div>
                          <div className="flex flex-col items-start w-[24%]">
                            <span className="text-[#9A999C] text-sm">Liquidity</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">80%</span>
                          </div>
                        </div>
                        <div className="flex w-full justify-between py-1 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[#9A999C] text-sm">Tokens Per SAP:</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">Anuforo</span>
                          </div>
                          <div className="flex flex-col items-start w-[24%]">
                            <span className="text-[#9A999C] text-sm">Lockup time</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">30 days</span>
                          </div>
                        </div>
                        <div className="flex w-full justify-between py-1 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[#9A999C] text-sm">Max Contribution:</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">Anuforo</span>
                          </div>
                          <div className="flex flex-col items-start w-[24%]">
                            <span className="text-[#9A999C] text-sm">Lockup time</span>
                            <span className="text-[#FFD549] text-sm font-kinn font-[400]">30 days</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full my-3">
                        <span className="font-kinn font-[700] text-sm text-white">Progress(50%)</span>
                        <div className="w-full">
                          <div className="w-full my-1">
                            <div className="h-2 bg-[#919191] rounded-[5px] w-full">
                              <div className="h-full bg-[#fff] rounded-[5px]" style={{ width: `50%` }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between text-[#9A999C] text-[12px]">
                            <span>0 Eth</span>
                            <span>1000</span>
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
          </div>
        </section>
      </main>
    </>
  );
}
