/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import chains from "../assets/chains.json";
import type Web3 from "web3";

type Web3ContextType = {
  account?: string | null;
  library?: Web3;
  chainId?: number;
  active: boolean;
  error?: Error;
  connectInjected: () => void;
  disconnectWallet: () => void;
};

const Web3Context = createContext<Web3ContextType>({} as Web3ContextType);

const injectedConnector = new InjectedConnector({
  supportedChainIds: chains.map((chain) => chain.chainId)
});

export const Web3ContextProvider = ({ children }: any) => {
  const { library, account, activate, deactivate, active, chainId, error, setError } = useWeb3React<Web3>();

  const connectInjected = useCallback(() => {
    activate(injectedConnector, setError, true)
      .then(() => {
        console.log("Metamask connected!");
      })
      .catch(setError);
  }, []);

  const disconnectWallet = useCallback(() => {
    if (active) deactivate();
  }, [active]);

  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuth) => {
      if (isAuth) {
        activate(injectedConnector, setError, true)
          .then(() => {
            console.log("Connected!");
          })
          .catch(setError);
      }
    });
  }, []);

  return (
    <Web3Context.Provider
      value={{
        library,
        account,
        active,
        connectInjected,
        error,
        disconnectWallet,
        chainId
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  return useContext(Web3Context);
};
