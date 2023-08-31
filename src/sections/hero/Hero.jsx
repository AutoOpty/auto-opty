import React from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inputContainer}>
        <button className={styles.button}>
          <svg className={styles.icon}>
            <use href="symbol-defs.svg#icon-search" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Enter your code"
          className={styles.input}
        />
      </div>
    </section>
  );
};

export default Hero;
