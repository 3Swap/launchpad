import { FiExternalLink, FiFacebook, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { Raleway } from "@next/font/google";

const raleway = Raleway({ weight: ["700"], subsets: ["latin"] });

export default function Footer() {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-between items-center w-full text-[#fff] px-10 py-6 ${raleway.className} gap-3`}
    >
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-3">
          <a className="gap-1 flex justify-center items-center" href="#">
            Careers <FiExternalLink />
          </a>{" "}
          |
        </div>
        <div className="flex justify-center items-center gap-3">
          <a className="gap-1 flex justify-center items-center" href="#">
            Support <FiExternalLink />
          </a>{" "}
          |
        </div>
        <div className="flex justify-center items-center gap-3">
          <a className="gap-1 flex justify-center items-center" href="#">
            Blog <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <a href="https://github.com/3swap">
          <button className="bg-[#fff] rounded-full px-2 py-2 text-[#000]/70">
            <FiGithub />
          </button>
        </a>
        <a href="#">
          <button className="bg-[#fff] rounded-full px-2 py-2 text-[#000]/70">
            <FiFacebook />
          </button>
        </a>
        <a href="#">
          <button className="bg-[#fff] rounded-full px-2 py-2 text-[#000]/70">
            <FiTwitter />
          </button>
        </a>
        <a href="#">
          <button className="bg-[#fff] rounded-full px-2 py-2 text-[#000]/70">
            <FiInstagram />
          </button>
        </a>
      </div>
    </div>
  );
}
