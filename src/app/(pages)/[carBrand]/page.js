import Link from 'next/link';
import React from 'react';


async function getData(carBrand) {
    const result = await fetch(`${process.env.URL}/api/carBrands/${carBrand}`, { cache: "no-store" })

    if (!result.ok) {
        throw new Error("Failed to fetch data.")
    }

    return result.json();
}


const CarModels = async ({ params }) => {
    const data = await getData(params.carBrand);

    return (
        <>
            <h1>{params.carBrand}</h1>

            {/* это нужно если указаны несколько моделей и с разными типами кузова... но существует ли такое в реальности ?!?!?! */}
            {/* <ul>
                {data.map((item) => item.carModel.map((model, ind) => {
                    return <li key={ind} > {model}</li>
                })
                )}
            </ul> */}
            <ul>
                {data.map((item, index) => <li key={index}>
                    <Link href={"/products"} > {item.carModel} - {item.carBody}</Link>
                </li>)}
            </ul>
        </>
    )
}

export default CarModels