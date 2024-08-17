import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFilter = ( brand, category, maxPrice, minPrice ) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isPending,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?&brand=${brand}&category=${category}&maxPrice=${maxPrice}&minPrice=${minPrice}`
      );
      // console.log(res.data);
      return res.data;
    },
  });
  return { products, isPending, refetch, isLoading };
};

export default useFilter;