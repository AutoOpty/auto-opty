import React from "react";
import Link from "next/link";
import filterByProp from "@/utils/filterByProps";


async function getData() {
  const result = await fetch(`${process.env.NEXTAUTH_URL}/api/carBrands`, { cache: "no-store" })

  if (!result.ok) {
    throw new Error("Failed to fetch data.")
  }

  const data = await result.json();
  return data;
}

const data = await getData();


const HomePage = () => {

  const uniqueDataByCarBrands = filterByProp(data, "carBrand")

  return <ul>
    {uniqueDataByCarBrands?.map((item, index) =>
      <li key={index}>
        <Link href={`/${item.carBrand}`} >{item.carBrand}</Link>
      </li>)}
  </ul>;
};


export default HomePage;