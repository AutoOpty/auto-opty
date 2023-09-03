"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import Image from 'next/image';


const Dashboard = () => {
    const session = useSession();
    const [sideValue, setSideValue] = useState("");


    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/details?username=${session?.data?.user.name}`, fetcher);

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router.push("/dashboard/login")
    }

    if (session.status === "authenticated" && session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN) {
        router.push("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("e.target", e.target);
        const article = e.target[0].value;
        const title = e.target[1].value;
        const brand = e.target[2].value;
        const direction = e.target[3].value;
        const photo = e.target[4].value;
        const video = e.target[5].value;
        const description = e.target[6].value;
        const side = sideValue;
        const price = e.target[11].value;
        const carBrand = e.target[12].value;
        const carModel = e.target[13].value;
        const carPhoto = e.target[14].value;
        const carBody = e.target[15].value;

        try {
            await fetch("/api/details", {
                method: "POST",
                body: JSON.stringify({
                    article,
                    title,
                    brand,
                    direction,
                    photo,
                    video,
                    description,
                    side,
                    price,
                    carBrand,
                    carModel,
                    carPhoto,
                    carBody,
                    username: session.data.user.name,
                })
            })
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (err) {
            console.log(err);
        }
    }

    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {

        return <div className={styles.container}>
            <div className={styles.cards}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(card => (
                        <div key={card._id} className={styles.card}>
                            <div className={styles.imgContainer}>
                                <Image src={card.carPhoto} alt={card.title} fill={true} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <p>{card.article}</p>
                                <h2 className={styles.title}>{card.title}</h2>
                                <p>{card.direction}</p>
                                <p>{card.carBrand}</p>
                                <p>{card.carModel}</p>
                            </div>

                            <span className={styles.delete}
                            // onClick={() => handleDelete(card._id)}
                            >X</span>
                        </div>))}
            </div>

            <form className={styles.new} onSubmit={handleSubmit}>
                <h1>Add New Detail</h1>
                <input type='text' placeholder='Article' className={styles.input} />
                <input type='text' placeholder='Title' className={styles.input} />
                <input type='text' placeholder='Brand' className={styles.input} />
                <input type='text' placeholder='Direction' className={styles.input} />
                <input type='text' placeholder='Photos' className={styles.input} />
                <input type='text' placeholder='Videos' className={styles.input} />
                <input type='text' placeholder='Description' className={styles.input} />
                <fieldset className={styles.side}><legend>Choose headlight`s side:</legend>
                    <input type="radio" id="leftSide" name="side" value="left" onClick={() => setSideValue('left')} />
                    <label htmlFor="leftSide">Left</label>
                    <input type="radio" id="rightSide" name="side" value="right"
                        onClick={() => setSideValue('right')} />
                    <label htmlFor="rightSide">Right</label>
                    <input type="radio" id="bothSide" name="side" value="both"
                        onClick={() => setSideValue("both")} />
                    <label htmlFor="bothSide">Both</label>
                </fieldset>
                <input type='text' placeholder='Price' className={styles.input} />
                <input type='text' placeholder='Car Brand' className={styles.input} />
                <input type='text' placeholder='Car Models' className={styles.input} />
                <input type='text' placeholder='Car Photo' className={styles.input} />
                <fieldset className={styles.carBody}><legend>Choose car`s body:</legend>

                    <label htmlFor="Hatchback">
                        <input type="checkbox" id="Hatchback" name="Hatchback" value="Hatchback" />
                        Hatchback
                    </label>
                    <label htmlFor="Sedan">
                        <input type="checkbox" id="Sedan" name="Sedan" value="Sedan" />
                        Sedan
                    </label>
                    <label htmlFor="Coupe">
                        <input type="checkbox" id="Coupe" name="Coupe" value="Coupe" />
                        Coupe
                    </label>
                    <label htmlFor="SUV">
                        <input type="checkbox" id="SUV" name="SUV" value="SUV" />
                        SUV
                    </label>
                    <label htmlFor="Station Wagon">
                        <input type="checkbox" id="Station Wagon" name="Station Wagon" value="Station Wagon" />
                        Station Wagon
                    </label>
                    <label htmlFor="Minivan">
                        <input type="checkbox" id="Minivan" name="Minivan" value="Minivan" />
                        Minivan
                    </label>
                    <label htmlFor="Crossover">
                        <input type="checkbox" id="Crossover" name="Crossover" value="Crossover" />
                        Crossover
                    </label>
                    <label htmlFor="Van">
                        <input type="checkbox" id="Van" name="Van" value="Van" />
                        Van
                    </label>
                </fieldset>

                <button className={styles.sendBtn}>Send</button>
            </form>
        </div>

    }
}


export default Dashboard