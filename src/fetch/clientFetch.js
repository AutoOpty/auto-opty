"use client";
import useSWR from "swr";

export const ClientGetData = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/products`, fetcher);
};