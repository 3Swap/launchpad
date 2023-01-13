/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Raleway, Poppins } from "@next/font/google";
import SaleItemCard from "../components/SaleItemCard";
import { FiChevronDown } from "react-icons/fi";

const raleway = Raleway({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ weight: "400" });

export default function Listing() {
  return (
    <>
      <Head>
        <title>3Swap Launchpad | Listing</title>
      </Head>
      <main className="flex flex-col justify-start items-center w-full h-full px-8 py-5 gap-3">
        <section className="flex flex-col justify-center items-center w-full gap-3">
          <div className={`${raleway.className} flex justify-between items-center w-full text-[#fff]`}>
            <span className="text-[16px] lg:text-[32px] capitalize">Live Sales</span>

            {/* <button className="bg-[#000] px-3 py-2 text-[7px] lg:text-[14px] capitalize flex justify-center items-center gap-3">
              <div className="w-2 h-2 lg:w-6 lg:h-6 rounded-[9999px]">
                <img src="/images/ethereum.svg" alt="coin" className="w-full h-full" />
              </div>
              ETH
              <FiChevronDown />
            </button> */}
          </div>
          <div
            className={`${raleway.className} flex flex-col lg:flex-row justify-evenly gap-8 items-center w-full px-4 py-3 flex-wrap`}
          >
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-full gap-3">
          <div className={`${raleway.className} flex justify-start items-start w-full text-[#fff]`}>
            <span className="text-[16px] lg:text-[32px] capitalize">Previous Launches</span>
          </div>
          <div
            className={`${raleway.className} flex flex-col lg:flex-row justify-evenly gap-8 items-center w-full px-4 py-3 flex-wrap`}
          >
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
            <SaleItemCard />
          </div>
        </section>
      </main>
    </>
  );
}
