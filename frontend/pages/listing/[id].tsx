import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

/* eslint-disable @next/next/no-img-element */
export default function Item() {
  return (
    <>
      <main className="w-full h-screen">
        <div className="container h-screen mx-[50px]">
          <div className="w-full flex  justify-between h-fit my-20 items-center">
            <div className="flex w-1/2 gap-5">
              <div className="flex">
                <img src="/images/ethereum.svg" alt="coin" className="w-[300px] h-[100px]" />
              </div>
              <div>
                <h1 className="font-kinn font-[700] text-white text-[40px]">Devil Dust Presale</h1>
                <p className="font-poppins text-sm text-white leading-[1.3rem] w-full ">
                  DEVIL DUST 🔥 Devil dust is going to be the biggest support token for one of the greatest tokens to
                  launch on BSC. Go from a fallen angel to an angel by holding Devil Dust😈 Devil Dust holders will be
                  rewarded in Angel Dust tokens. 🔥 Low MC 🔥 Safu Team 🔥 Competitions after launch 🔥 Marketing
                  campaign planned & ready to roll. 10/10 taxes 4% to Angeldust ( rewards) 😇 4% to demons (marketing)
                  👹 2% to HELL (Liquidity)🔥
                </p>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.1)] w-[35%] p-10 border rounded-[20px] mr-[50px]">
              <div className="flex flex-col">
                <div className="flex justify-between items-center relative mb-2">
                  <div>
                    <span className="text-[#ccc] text-xs">Sale ends in:</span>
                    <h1 className="font-kinn text-white font-[700]">00:12:28:04</h1>
                  </div>
                  <span className="bg-[green] py-2 px-4 text-white text-sm rounded-md absolute -top-[25px] right-0">
                    Live
                  </span>
                </div>
                <div className="w-full my-2">
                  <div className="w-full my-1">
                    <h1 className="font-kinn text-white font-[700]">Progress(50%)</h1>
                    <div className="h-2 bg-[#919191] rounded-[5px] w-full">
                      <div className="h-full bg-[#fff] rounded-[5px]" style={{ width: `50%` }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#9A999C] text-[12px]">
                    <span>00000000000000000001</span>
                    <span>1000SAP</span>
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-white font-kinn font-bold text-sm">Buy</h1>
                  <div className="w-full flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Input amount"
                      className="w-[80%] outline-none border py-2 px-3 rounded-sm bg-[rgba(255,255,255,0.1)] text-white placeholder-white font-kinn"
                    />
                    <button className="btn text-white py-1 px-3 bg-black">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-full flex">
            <div className="flex border rounded-[20px] bg-[rgba(126, 123, 160, 0.2)] w-1/2 mx-[80px]">
              <div className="py-10 px-5  flex-col w-full flex justify-between leading-8 text-white">
                <div className="items-start flex justify-between">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Presale Address</span>
                  <span className="w-[30%] text-sm font-poppins text-[#FFD549]">0x695182EDd7064</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Token Name</span>
                  <span className="w-[30%] text-sm font-poppins">Devil Dust</span>
                </div>
                <div className="items-start flex justify-between">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px] flex flex-col">
                    Token Decimals <span className="text-[8px] text-[#ccc] -mt-4">(Don{`'`}t send tokens)</span>
                  </span>
                  <span className="w-[30%] text-sm font-poppins">9</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Token Address</span>
                  <span className="w-[30%] text-sm font-poppins text-[#FFD549]">0x695182EDd7064</span>
                </div>
                <div className="items-start flex justify-between">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Total Supply</span>
                  <span className="w-[30%] text-sm font-poppins]">666,666,666</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Tokens for Presale</span>
                  <span className="w-[30%] text-sm font-poppins">159,999,999 DD</span>
                </div>
                <div className="items-start flex justify-between">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Token for Liquidity</span>
                  <span className="w-[30%] text-sm font-poppins">121,599,599</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Presale Rate</span>
                  <span className="w-[30%] text-sm font-poppins">1 $Sap = 7,999,999 DD</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Soft Cap</span>
                  <span className="w-[30%] text-sm font-poppins ">10 SAP</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Hard Cap</span>
                  <span className="w-[30%] text-sm font-poppins ">20 SAP</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Unsold Tokens</span>
                  <span className="w-[30%] text-sm font-poppins ">Refund</span>
                </div>
                <div className="flex items-start justify-between ">
                  <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Listing Percent</span>
                  <span className="w-[30%] text-sm font-poppins ">80%</span>
                </div>
                <div className="grid grid-cols-3 my-5 font-kinn font-[700]">
                  <Link href="/" className="flex items-center gap-2">
                    Whitepaper <FiExternalLink />
                  </Link>
                  <Link href="/" className="flex items-center gap-2">
                    Social <FiExternalLink />
                  </Link>
                  <Link href="/" className="flex items-center gap-2">
                    Community <FiExternalLink />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex border rounded-[20px] bg-[rgba(126, 123, 160, 0.2)] w-[80%] ">
                <div className="py-10 px-5  flex-col w-full flex justify-between leading-8 text-white">
                  <div className="items-start flex justify-between">
                    <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Status</span>
                    <span className="w-[30%] text-sm font-poppins text-[#FFD549]">0x695182EDd7064</span>
                  </div>
                  <div className="flex items-start justify-between ">
                    <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Sale Type</span>
                    <span className="w-[30%] text-sm font-poppins">Public</span>
                  </div>
                  <div className="flex items-start justify-between ">
                    <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Minimum Buy</span>
                    <span className="w-[30%] text-sm font-poppins">0.1 SAP</span>
                  </div>
                  <div className="flex items-start justify-between ">
                    <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Total Contributions</span>
                    <span className="w-[30%] text-sm font-poppins">4</span>
                  </div>
                  <div className="items-start flex justify-between">
                    <span className="w-[70%] text-white font-[700] font-kinn text-[12px]">Maximum Buy</span>
                    <span className="w-[30%] text-sm font-poppins]">0.5 SAP</span>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col w-[75%] my-5 ml-4">
                <input
                  type="email"
                  placeholder="Input E-mail Address"
                  className="w-[100%] outline-none border py-2 px-3 rounded-sm bg-[rgba(255,255,255,0.1)] text-white placeholder-white font-kinn"
                />
                <button className="btn rounded-sm bg-black text-white font-kinn font-[600] my-2">Remind me</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
