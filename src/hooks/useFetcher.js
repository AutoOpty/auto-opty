import useSWR from "swr";

export const useFetcherProductsArticles = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data } = useSWR("/api/products", fetcher);
    const listOfProductsArticles = data?.map((item) => item.article);

    return listOfProductsArticles;
}