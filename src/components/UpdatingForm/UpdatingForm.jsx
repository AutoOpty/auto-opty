"use client";
import React from 'react';
import styles from "./UpdatingForm.module.css";


const UpdatingForm = () => {
    return (
        <div>
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
    )
}

export default UpdatingForm;