/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import _ from "lodash";
import Link from "next/link";
import { FiExternalLink, FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import SaleItemCard from "../components/SaleItemCard";
import partners from "../assets/partners.json";
import { useGraphContext } from "../contexts/graph";

export default function Home() {
  const { liveLaunchItems } = useGraphContext();
  return (
    <>
      <Head>
        <title>3Swap Launchpad</title>
      </Head>
      <main className="container " style={{ scrollSnapAlign: "center" }}>
        <section style={{ scrollSnapAlign: "center" }} className="flex w-full h-[90vh] mx-[50px]">
          <div className="flex w-1/2 items-center">
            <div className="flex flex-col">
              <h2 className="text-[55px] text-white font-[700] leading-[3.5rem] font-kinn">
                Multi-chain IDO Launchpad with superpowers
              </h2>
              <div className="">
                <p className={` text-[#d8d8d8] text-[16px] max-w-xs pt-2 leading-6 font-poppin font-[400]`}>
                  3swap launchpad will empower crypto currency projects with the ability to distribute tokens and raise
                  liquidity.
                </p>
              </div>
              <div className="my-2">
                <button className={`btn bg-[#FFD549] text-md font-bold rounded p-3 px-10 w-fit font-kinn`}>
                  See projects
                </button>
              </div>
              <div className="my-2">
                <span className="text-white text-md font-kinn text-[18px] font-[600]">Our partners</span>
                <div className="flex justify-center lg:justify-start gap-2 items-center w-fit pt-2">
                  {partners.map((item, index) => (
                    <a href={item.url} key={index} target="_blank" rel="noreferrer">
                      <img src={item.image} alt={item.name} className="w-24 h-10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <img
              src="/images/hero_img.svg"
              alt="hero_img"
              className="w-full h-screen flex justify-start -mx-20 -mt-14"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="flex w-full h-[90vh] mx-[50px] items-center" style={{ scrollSnapAlign: "center" }}>
          <div className="w-1/2 flex  flex-col">
            <div className="text-[20px] font-[700] font-kinn text-[#FFD549] mb-3">About us</div>
            <h1 className="text-[55px] text-white font-[700] leading-[3.5rem] font-kinn max-w-xl">
              Super charge your project for a sucessful launch.
            </h1>
            <p className="text-[16px] text-[#d8d8d8] max-w-md font-poppin my-2">
              3swap launchpad will empower crypto currency projects with the ability to distribute tokens and raise
              liquidity. 3swap launchpad will empower crypto currency projects with the ability to distribute tokens and
              raise liquidity.
            </p>
            <div className="flex gap-3 my-2">
              <Link href="">
                <button className="bg-[#fff] rounded-full px-2 py-2 text-[#1E1E1E]">
                  <FiTwitter />
                </button>
              </Link>
              <Link href="">
                <button className="bg-[#fff] rounded-full px-2 py-2 text-[#1E1E1E]">
                  <FiFacebook />
                </button>
              </Link>
              <Link href="">
                <button className="bg-[#fff] rounded-full px-2 py-2 text-[#1E1E1E]">
                  <FiGithub />
                </button>
              </Link>
              <Link href="">
                <button className="bg-[#fff] rounded-full px-2 py-2 text-[#1E1E1E]">
                  <FiInstagram />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2/5 h-[300px] bg-[rgba(255,255,255,0.1)] border rounded-[10px] p-10">
            <h1 className="text-[20px] text-white font-kinn font-[700]">Why choose us?</h1>
            <p className="text-[16px] text-[rgba(255,255,255,0.7)] my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis delectus unde cupiditate dolores est
              alias odit eaque animi, commodi ut.
            </p>
            <div className="w-full text-white gap-2 grid grid-cols-2 font-kinn mt-8 font-[600]">
              <Link href="" className="flex items-center gap-2">
                Read whitepaper <FiExternalLink />
              </Link>
              <Link href="" className="flex items-center gap-2">
                How to buy <FiExternalLink />
              </Link>
              <Link href="" className="flex items-center gap-2">
                Apply for IDO <FiExternalLink />
              </Link>
              <Link href="" className="flex items-center gap-2">
                Launchpad token <FiExternalLink />
              </Link>
            </div>
          </div>
        </section>
        <section className="flex w-full h-[90vh] mx-[50px]" style={{ scrollSnapAlign: "center" }}>
          <div className="w-full">
            <span className="flex justify-between">
              <h1 className="font-kinn text-white font-[700]">Live sales</h1>
              <button className="btn bg-black text-white font-kinn font-[600] rounded-md py-2 px-5">
                View more Listing
              </button>
            </span>
            <div className="grid grid-cols-3 gap-4 my-5">
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
                        <h1 className="text-[14px] text-white font-kinn font-[600]">
                          Freight Coin Binance Smart Chain
                        </h1>
                      </span>
                      <span className="p-2 bg-[purple] text-white text-[10px] font-kinn font-[600] rounded">Live</span>
                    </div>
                    <div className="flex text-white my-2">
                      <p className="text-[12px] ">Native IDO tokens of the IDO Launchpad platform</p>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="flex items-center text-white font-kinn">
                        <span>
                          <img src="/images/ethereum.svg" alt="coin" className="w-full h-8" />
                        </span>
                        <span>ETH</span>
                      </div>
                      <div className="flex flex-col text-white text-sm leading-tight">
                        <span className="text-[10px]">Sales ends in:</span>
                        <span className="font-kinn text-md">00:12:28:04</span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full justify-between my-2">
                      <div className="flex w-full justify-between bg-[red] p-2 gap-2">
                        <div className="lfe">ok</div>
                        <div className="lfe">deede</div>
                      </div>
                      <div className="flex w-full justify-between bg-[yellow] p-2 gap-2">
                        <div className="lfe">ok</div>
                        <div className="lfe">deede</div>
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
