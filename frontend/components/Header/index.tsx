import Image from "next/image";
import { Raleway } from "@next/font/google";
import Link from "next/link";
import { formatEthAddress } from "eth-address";
import { useWeb3Context } from "../../contexts/web3";

const raleway = Raleway({ subsets: ["latin"] });

export default function Header() {
  const { account, connectInjected, active, disconnectWallet } = useWeb3Context();
  return (
    <div className="container flex  justify-between items-center py-5 w-full mx-auto">
      <Link href="/">
        <Image src="/images/logo.png" alt="3swap" height={56} width={150} />
      </Link>
      <div
        className={`hidden lg:flex justify-center gap-4 items-center ${raleway.className} text-[#fff] font-[700] text-[16px]`}
      >
        <Link href="/">Home</Link>
        <Link href="/launch">Launch Sale</Link>
        <button onClick={!active ? connectInjected : disconnectWallet} className="bg-[#000] px-3 py-2 rounded text-sm">
          {!account ? "Connect Wallet" : formatEthAddress(account, 5)}
        </button>
      </div>
    </div>
  );
}
