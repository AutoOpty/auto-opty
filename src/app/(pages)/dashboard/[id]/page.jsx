import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import UpdatingForm from '@/components/UpdatingForm/UpdatingForm';


async function getDataById(id) {

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/base/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound();
    }

    return res.json()
}


const EditCard = async ({ params }) => {
    const { id } = params;
    const card = await getDataById(id);


    return <div className={styles.container}>
        <div key={card._id} className={styles.card}>
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
            <div className={styles.carModelsWrapper}>
                Car Models: {card.carModels.map((item, index) => (<p key={index}>{item}</p>))}
            </div>
            <div className={styles.imgContainer}>
                <Image src={card.carPhoto} alt={card.title} fill={true} />
            </div>
            <div className={styles.carBodiesWrapper}>
                Car Bodies: {card.carBodies.map((item, index) => (<p key={index}>{item}</p>))}
            </div>
        </div>

        <UpdatingForm id={id} card={card} />


    </div>
}


export default EditCard;