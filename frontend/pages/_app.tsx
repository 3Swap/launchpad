import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Footer from "../components/Footer";
import { Web3ContextProvider } from "../contexts/web3";

function getLibrary(provider: any) {
  return new Web3(provider);
}

const AppContent = ({ children }: any) => (
  <div className="flex flex-col justify-center items-start w-screen h-screen overflow-auto bg-[#350870]">
    <Header />
    <div className="flex-1 w-full overflow-auto">{children}</div>
    <Footer />
  </div>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ContextProvider>
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
      </Web3ContextProvider>
    </Web3ReactProvider>
  );
}
