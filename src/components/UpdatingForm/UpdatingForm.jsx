"use client";
import React, { useState } from 'react';
import styles from "./UpdatingForm.module.css";


const UpdatingForm = ({ id, card }) => {
    const { article, title, brand, direction, photos, videos, description, side, price, carBrand, carModels, carPhoto, carBodies } = card;

    const [newArticle, setNewArticle] = useState(article);
    const [newTitle, setNewTitle] = useState(title);
    const [newBrand, setNewBrand] = useState(brand);
    const [newDirection, setNewDirection] = useState(direction);
    const [newPhotos, setNewPhotos] = useState(photos);
    const [newVideos, setNewVideos] = useState(videos);
    const [newDescription, setNewDescription] = useState(description);
    const [newSide, setNewSide] = useState(side);
    const [newPrice, setNewPrice] = useState(price);
    const [newCarBrand, setNewCarBrand] = useState(carBrand);
    const [newCarModels, setNewCarModels] = useState(carModels);
    const [newCarPhoto, setNewCarPhoto] = useState(carPhoto);
    const [newCarBodies, setNewCarBodies] = useState(carBodies);


    const changeSide = (e) => {
        setNewSide(e.target.value);
    }

    const changeCarBodies = (e) => {
        // проверяет есть ли кузов в массиве кузовов
        const isCarBodyIn = carBodies.find(item => item === e.target.value);
        if (isCarBodyIn) {
            // если есть - он удаляется и создается новый массив, который далее сохраняется
            const newArr = carBodies.filter(item => item !== e.target.value)
            setNewCarBodies(newArr);
        } else {
            // если кузова нет - добавляется в массив
            const newArray = [...carBodies, e.target.value];
            setNewCarBodies(newArray);
        };
    }


    return (
        <div>
            <form className={styles.new}
            // onSubmit={handleSubmit}
            >
                <h1>Add New Detail</h1>
                <input type='text' placeholder='Article' className={styles.input} value={article} />
                <input type='text' placeholder='Title' className={styles.input} value={title} />
                <input type='text' placeholder='Brand' className={styles.input} value={brand} />
                <input type='text' placeholder='Direction' className={styles.input} value={direction} />
                <input type='text' placeholder='Photos' className={styles.input} value={photos} />
                <input type='text' placeholder='Videos' className={styles.input} value={videos} />
                <input type='text' placeholder='Description' className={styles.input} value={description} />
                <fieldset className={styles.side}><legend>Choose headlight`s side:</legend>
                    <input type="radio" id="leftSide" name="side" value="left" onChange={changeSide}
                    // {...newSide === "left" ? checked : null}
                    />
                    <label htmlFor="leftSide">Left</label>
                    <input type="radio" id="rightSide" name="side" value="right"
                        onChange={changeSide}
                    // {...newSide === "right" ? checked : null}
                    />
                    <label htmlFor="rightSide">Right</label>
                    <input type="radio" id="bothSide" name="side" value="both"
                        onChange={changeSide}
                    // {...newSide === "both" ? checked : null}
                    />
                    <label htmlFor="bothSide">Both</label>
                </fieldset>
                <input type='text' placeholder='Price' className={styles.input} value={price} />
                <input type='text' placeholder='Car Brand' className={styles.input} value={carBrand} />
                <input type='text' placeholder='Car Models' className={styles.input} value={carModels} />
                <input type='text' placeholder='Car Photo' className={styles.input} value={carPhoto} />
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
    )
}

export default UpdatingForm;