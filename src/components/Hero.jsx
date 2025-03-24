import React from "react";

import styles from "./Hero.module.css";
import mySelf from "../assets/SibusisoMatebese'sPicture.png"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sibusiso Matebese</h1>
        <p className={styles.description}>
          I'm a full stack developer with expertise in MERN stack
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={mySelf}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{width:"300px", height:"300px", borderRadius:"50%"}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};