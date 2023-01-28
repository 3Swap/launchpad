import { request, gql } from "graphql-request";
import _ from "lodash";
import { LaunchItem, LaunchItems } from "../data/models";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type GraphContextType = {
  liveLaunchItems: LaunchItems;
  paginate: () => void;
  // singleLiveLaunchItem: LaunchItem;
  // fetchSingleLiveLaunchItem: (id: string) => void;
};

const GraphContext = createContext<GraphContextType>({} as GraphContextType);
const URI = "https://graph.vefinetwork.org/app/polygon/query/subgraphs/name/vefi/public_token_launch";

export const GraphContextProvider = ({ children }: any) => {
  const [liveLaunchItems, setLiveLaunchItems] = useState<LaunchItems>([]);
  const [page, setPage] = useState<number>(0);

  const paginate = useCallback(() => setPage((p) => p + 1), []);

  useEffect(() => {
    request(
      URI,
      gql`{
      launches(skip: ${page * 10}, where: { saleStartTime_lte: ${Math.floor(
        Date.now() / 1000
      )} saleEndTime_gt: ${Math.floor(Date.now() / 1000)}}) {
        id
        token {
          name
          decimals
          symbol
        }
        tokensPerEther
        tokensForSale
        softcap
        hardcap
        saleStartTime,
        saleEndTime,
        minContributionEther,
        maxContributionEther
      }
    }`
    ).then((res) =>
      setLiveLaunchItems(
        res.launches.map((launch: any) => ({
          tokenName: launch.token.name,
          tokenSymbol: launch.token.symbol,
          chainName: "Polygon",
          chainId: 137,
          chainSymbol: "MATIC",
          saleStartTime: _.multiply(parseInt(launch.saleStartTime), 1000),
          saleEndTime: _.multiply(parseInt(launch.saleEndTime), 1000),
          softcap: launch.softcap,
          hardcap: launch.hardcap,
          id: launch.id,
          tokensForSale: launch.tokensForSale,
          tokensPerEther: launch.tokensPerEther,
          minContribution: launch.minContributionEther,
          maxContribution: launch.maxContributionEther
        }))
      )
    );
  }, [page]);

  return <GraphContext.Provider value={{ liveLaunchItems, paginate }}>{children}</GraphContext.Provider>;
};

export const useGraphContext = () => useContext(GraphContext);
