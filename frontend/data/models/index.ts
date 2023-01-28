export type LaunchItem = {
  tokenName: string;
  chainName: string;
  chainSymbol: string;
  chainId: number;
  tokenSymbol: string;
  saleStartTime: number;
  saleEndTime: number;
  softcap: string | number;
  hardcap: string | number;
  id: string;
  tokensForSale: string | number;
  tokensPerEther: string | number;
  minContribution: string;
  maxContribution: string;
};

export type LaunchItems = Array<LaunchItem>;
