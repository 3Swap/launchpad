import Image from "next/image";
import { Raleway } from "@next/font/google";
import Link from "next/link";
import { formatEthAddress } from "eth-address";
import { useWeb3Context } from "../../contexts/web3";

const raleway = Raleway({ subsets: ["latin"] });

export default function Header() {
  const { account, connectInjected, active, disconnectWallet } = useWeb3Context();
  return (
    <div className="flex px-3 justify-between items-center py-3 w-full">
      <Link href="/">
        <Image src="/images/logo.png" alt="3swap" height={56} width={100} />
      </Link>
      <div
        className={`hidden lg:flex justify-center gap-4 items-center ${raleway.className} text-[#fff] font-[700] text-[18px]`}
      >
        <a href="#">Projects</a>
        <a href="#">Buy $SAP</a>
        <a href="#">Staking</a>
        <button onClick={!active ? connectInjected : disconnectWallet} className="bg-[#000] px-3 py-2">
          {!account ? "Connect Wallet" : formatEthAddress(account, 5)}
        </button>
      </div>
    </div>
  );
}
