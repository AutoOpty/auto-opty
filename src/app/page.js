// export default function Home() {
//   return (
//     <main>
//     </main>
//   );
// }


import React from "react";
import Link from "next/link";
import filterByProp from "@/utils/filterByProps";


async function getData() {
  const result = await fetch(`${process.env.URL}/api/carBrands`, { cache: "no-store" })

  if (!result.ok) {
    throw new Error("Failed to fetch data.")
  }

  const data = await result.json();
  return data;
}

const HomePage = () => {
  // const data = await getData();
  // console.log(data);
  // const uniqueDataByCarBrands = filterByProp(data, "carBrand")

  return <div>HomePage</div>
  // <ul>
  //   {uniqueDataByCarBrands?.map((item, index) =>
  //     <li key={index}>
  //       <Link href={`/${item.carBrand}`} >{item.carBrand}</Link>
  //     </li>)}
  // </ul>;
};


export default HomePage;