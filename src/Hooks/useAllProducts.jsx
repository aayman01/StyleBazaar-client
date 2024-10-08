import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = (
  searchText,
  currentPage,
  itemsPerPage,
  sort,
) => {
  const axiosPublic = useAxiosPublic();
  // console.log("in useProduct", brand, category, searchText, currentPage);

  const {
    data: products = [],
    isPending,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?search=${searchText}&page=${currentPage}&size=${itemsPerPage}&sort=${sort}}`
      );
      // console.log(res.data);
      return res.data;
    },
  });
  return { products, isPending, refetch, isLoading };
};

export default useAllProducts;