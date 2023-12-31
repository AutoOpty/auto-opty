"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Dashboard = () => {
    const session = useSession();
    const [sideValue, setSideValue] = useState("");
    const [carBodyValues, setCarBodyValues] = useState([]);


    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/base?username=${session?.data?.user.name}`, fetcher);

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

    const changeSide = (e) => {
        setSideValue(e.target.value);
    }

    const changeCarBodies = (e) => {
        // проверяет есть ли кузов в массиве кузовов
        const isCarBodyIn = carBodyValues.find(item => item === e.target.value);
        if (isCarBodyIn) {
            // если есть - он удаляется и создается новый массив, который далее сохраняется
            const newArr = carBodyValues.filter(item => item !== e.target.value)
            setCarBodyValues(newArr);
        } else {
            // если кузова нет - добавляется в массив
            const newArray = [...carBodyValues, e.target.value];
            setCarBodyValues(newArray);
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const article = e.target[0].value;
        const title = e.target[1].value;
        const brand = e.target[2].value;
        const direction = e.target[3].value;
        const photos = e.target[4].value;
        const videos = e.target[5].value;
        const description = e.target[6].value;
        const side = sideValue;
        const price = e.target[11].value;
        const carBrand = e.target[12].value;
        const carModels = e.target[13].value;
        const carPhoto = e.target[14].value;
        const carBodies = carBodyValues;

        try {
            await fetch("/api/base", {
                method: "POST",
                body: JSON.stringify({
                    article,
                    title,
                    brand,
                    direction,
                    photos,
                    videos,
                    description,
                    side,
                    price,
                    carBrand,
                    carModels,
                    carPhoto,
                    carBodies,
                    username: session.data.user.name,
                })
            })
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/base/${id}`, { method: "DELETE" });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (error) {
            console.log(error);
        }

    }

    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {

        return <div className={styles.container}>
            <div className={styles.cards}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(card => (
                        <div key={card._id} className={styles.card}>
                            <div>
                                <p>Article: {card.article}</p>
                                <h2 className={styles.title}>Title: {card.title}</h2>
                                <p>Brand: {card.brand}</p>
                                <p>Direction: {card.direction}</p>
                                <p>Description: {card.description}</p>
                                <div className={styles.photosWrapper}> Photos:
                                    {card.photos.map((item, index) => (<div key={index} className={styles.imgContainer}>
                                        <Image src={item} alt={card.title} fill={true} />
                                    </div>))}
                                </div>
                                <div className={styles.videosWrapper}>Videos:
                                    {card.videos.map((item, index) => (<Link key={index} href={item}> {item}</Link>))}
                                </div>
                                <p>Side: {card.side}</p>
                                <p>Price: {card.price}</p>
                                <p>Car Brand: {card.carBrand}</p>
                                <div className={styles.carModelsWrapper}>Car Models: {card.carModels.map((item, index) => (<p key={index}>{item}</p>))}</div>
                                <div className={styles.imgContainer}>
                                    <Image src={card.carPhoto} alt={card.title} fill={true} />
                                </div>
                                <div className={styles.carBodiesWrapper}>Car Bodies: {card.carBodies.map((item, index) => (<p key={index}>{item}</p>))}</div>
                            </div>

                            <div className={styles.btnsWrapper}>
                                {/* <button className={styles.editBtn} onClick={handleEdit}>Edit</button> */}
                                <Link href={`/dashboard/${card._id}`}>Edit Card</Link>
                                <span className={styles.delete}
                                    onClick={() => handleDelete(card._id)}
                                >X</span>
                            </div>
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
                    <input type="radio" id="leftSide" name="side" value="left" onChange={changeSide} />
                    <label htmlFor="leftSide">Left</label>
                    <input type="radio" id="rightSide" name="side" value="right"
                        onChange={changeSide} />
                    <label htmlFor="rightSide">Right</label>
                    <input type="radio" id="bothSide" name="side" value="both"
                        onChange={changeSide} />
                    <label htmlFor="bothSide">Both</label>
                </fieldset>
                <input type='text' placeholder='Price' className={styles.input} />
                <input type='text' placeholder='Car Brand' className={styles.input} />
                <input type='text' placeholder='Car Models' className={styles.input} />
                <input type='text' placeholder='Car Photo' className={styles.input} />
                <fieldset className={styles.carBodies}><legend>Choose car`s body:</legend>

                    <label htmlFor="Hatchback">
                        <input type="checkbox" id="Hatchback" name="Hatchback" value="Hatchback" onChange={changeCarBodies} />
                        Hatchback
                    </label>
                    <label htmlFor="Sedan">
                        <input type="checkbox" id="Sedan" name="Sedan" value="Sedan" onChange={changeCarBodies} />
                        Sedan
                    </label>
                    <label htmlFor="Coupe">
                        <input type="checkbox" id="Coupe" name="Coupe" value="Coupe" onChange={changeCarBodies} />
                        Coupe
                    </label>
                    <label htmlFor="SUV">
                        <input type="checkbox" id="SUV" name="SUV" value="SUV" onChange={changeCarBodies} />
                        SUV
                    </label>
                    <label htmlFor="Station Wagon">
                        <input type="checkbox" id="Station Wagon" name="Station Wagon" value="Station Wagon" onChange={changeCarBodies} />
                        Station Wagon
                    </label>
                    <label htmlFor="Minivan">
                        <input type="checkbox" id="Minivan" name="Minivan" value="Minivan" onChange={changeCarBodies} />
                        Minivan
                    </label>
                    <label htmlFor="Crossover">
                        <input type="checkbox" id="Crossover" name="Crossover" value="Crossover" onChange={changeCarBodies} />
                        Crossover
                    </label>
                    <label htmlFor="Van">
                        <input type="checkbox" id="Van" name="Van" value="Van" onChange={changeCarBodies} />
                        Van
                    </label>
                </fieldset>

                <button className={styles.sendBtn}>Send</button>
            </form>
        </div>

    }
}


export default Dashboard