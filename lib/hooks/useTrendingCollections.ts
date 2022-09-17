import { useQuery } from "@apollo/client";
import { GET_TRENDING_COLLECTIONS
 } from "../../graphql/getTrendingCollectionsQuery";

export const useTrendingCollections = () => {
  const { loading, data } = useQuery(
    GET_TRENDING_COLLECTIONS
  );
  const trendingCollections = data?.trendingCollections.edges.map(
    (edges: { node: any; }) => edges.node
  );

  return { loading, trendingCollections };
};