import React from "react";

import styles from "./Hero.module.css";
import mySelf from "../assets/SibusisoMatebese'sPicture.png"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sibusiso Matebese</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js), but my journey into tech wasn't always linear. I've always been fascinated by problem-solving and creative solutions, which initially led me to study design. However, I soon realized that my true passion was in coding, where I could combine my creative instincts with technical expertise to build meaningful, user-focused applications.

Starting as a self-taught developer, I dove deep into JavaScript, learning through hands-on projects and collaborating with online communities. Over time, I refined my skills by working on real-world applications.

I believe in continuous learning, always keeping up with the latest technologies and best practices to provide my clients with cutting-edge solutions. For me, freelancing is not just about coding — it's about building relationships, solving real-world problems, and delivering value.

At the core of everything I do is a commitment to delivering high-quality, scalable, and user-centric solutions. I approach each project with a sense of purpose, knowing that the work I do has a real impact on my clients' success.        </p>
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