"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import Image from 'next/image';


const Dashboard = () => {
    const session = useSession();

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

            <form className={styles.new}
            // onSubmit={handleSubmit}
            >
                <h1>Add New Detail</h1>
                <input type='text' placeholder='Article' className={styles.input} />
                <input type='text' placeholder='Title' className={styles.input} />
                <input type='text' placeholder='Brand' className={styles.input} />
                <input type='text' placeholder='Direction' className={styles.input} />
                <input type='text' placeholder='Photos' className={styles.input} />
                <input type='text' placeholder='Videos' className={styles.input} />
                <input type='text' placeholder='Description' className={styles.input} />
                <fieldset className={styles.side}><legend>Choose headlight`s side:</legend>
                    <input type="radio" id="leftSide" name="side" value="left" />
                    <label for="leftSide">Left</label>
                    <input type="radio" id="rightSide" name="side" value="right" />
                    <label for="rightSide">Right</label>
                    <input type="radio" id="bothSide" name="side" value="both" />
                    <label for="bothSide">Both</label>
                </fieldset>
                <input type='text' placeholder='Price' className={styles.input} />
                <input type='text' placeholder='Car Brand' className={styles.input} />
                <input type='text' placeholder='Car Models' className={styles.input} />
                <input type='text' placeholder='Car Photo' className={styles.input} />
                <fieldset className={styles.carBody}><legend>Choose car`s body:</legend>

                    <label for="Hatchback">
                        <input type="checkbox" id="Hatchback" name="Hatchback" value="Hatchback" />
                        Hatchback
                    </label>
                    <label for="Sedan">
                        <input type="checkbox" id="Sedan" name="Sedan" value="Sedan" />
                        Sedan
                    </label>
                    <label for="Coupe">
                        <input type="checkbox" id="Coupe" name="Coupe" value="Coupe" />
                        Coupe
                    </label>
                    <label for="SUV">
                        <input type="checkbox" id="SUV" name="SUV" value="SUV" />
                        SUV
                    </label>
                    <label for="Station Wagon">
                        <input type="checkbox" id="Station Wagon" name="Station Wagon" value="Station Wagon" />
                        Station Wagon
                    </label>
                    <label for="Minivan">
                        <input type="checkbox" id="Minivan" name="Minivan" value="Minivan" />
                        Minivan
                    </label>
                    <label for="Crossover">
                        <input type="checkbox" id="Crossover" name="Crossover" value="Crossover" />
                        Crossover
                    </label>
                    <label for="Van">
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