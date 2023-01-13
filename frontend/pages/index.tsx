/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { Raleway, Poppins } from "@next/font/google";
import SaleItemCard from "../components/SaleItemCard";
import partners from "../assets/partners.json";

const raleway = Raleway({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>3Swap Launchpad</title>
      </Head>
      <main className="flex flex-col justify-start items-center w-full h-full px-8 py-5 gap-3">
        <section className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className="flex flex-col gap-2 px-3 py-1 justify-center items-center lg:items-start w-full lg:w-1/2">
            <span
              className={`${raleway.className} text-[25px] lg:text-[50px] capitalize text-[#fff] text-center lg:text-justify`}
            >
              Multi-chain IDO Launchpad with superpowers
            </span>
            <p className={`${poppins.className} text-[#d8d8d8] text-[18px] w-full lg:w-80 text-center lg:text-justify`}>
              3swap launchpad will empower cryptocurrency projects with the ability to distribute tokens and raise
              liquidity.
            </p>
            <button
              className={`bg-[#ffd549] px-8 py-2 rounded-[5px] ${raleway.className} text-[#000] text-[7px] lg:text-[14px]`}
            >
              See Projects
            </button>
            <div className="flex flex-col justify-center items-center lg:items-start w-full gap-2 py-4 px-2">
              <span
                className={`${raleway.className} text-[12px] lg:text-[24px] capitalize text-[#fff] text-center lg:text-justify`}
              >
                Our partners
              </span>
              <div className="flex justify-center lg:justify-start gap-2 items-center w-full">
                {partners.map((item, index) => (
                  <a href={item.url} key={index} target="_blank" rel="noreferrer">
                    <img src={item.image} alt={item.name} className="w-24 h-24" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-2 py-4 w-full lg:w-1/2">
            <img src="/images/hero_img.svg" alt="hero_img" className="w-full" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-full gap-3">
          <div className={`${raleway.className} flex lg:justify-between justify-start items-center w-full text-[#fff]`}>
            <span className="text-[16px] lg:text-[32px] capitalize">Live Sales</span>
            <div className="hidden lg:block">
              <Link href="/listing">
                <button className="bg-[#000] px-3 py-2 text-[7px] lg:text-[14px] capitalize">View more listings</button>
              </Link>
            </div>
          </div>
          <div
            className={`${raleway.className} flex flex-col lg:flex-row justify-evenly gap-8 items-center w-full px-4 py-3 flex-wrap`}
          >
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
          </div>
          <div className="block lg:hidden w-full px-3 py-2">
            <Link href="/listing">
              <button className="bg-[#000] text-[#fff] px-3 py-2 text-[7px] lg:text-[14px] capitalize w-full">
                View more listings
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
