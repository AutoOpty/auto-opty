import CallBtn from "@/components/CallBtn/CallBtn";
import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Auto Opti</h1>
      <p>Lorem ipsum - Lorem ipsum</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <CallBtn />
    </section>
  );
};

export default Hero;
