import React from "react";
import styles from "./About.module.css";
import frontend from "../assets/cursor_1323563.png"
import server from "../assets/server_1383395.png"
import coding from "../assets/6491428.jpg"
import git from "../assets/algorithm_10055345.png"


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img src={coding} alt="Cursor icon"        style={{width:"200px", height:"200px", borderRadius:"50%"}}
 />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={frontend} alt="Cursor icon" style={{width:"40px", height:"40px"}} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
              In frontend development I specialize in crafting responsive, user-friendly interfaces using HTML, CSS, JavaScript and React.
              Integrate APIs using axios, manage complex state using redux toolkit and context API
             
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} style={{width:"40px", height:"40px"}} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I build and optimize RESTful using Node JS and Express.
                Ensure security with authentication, authorization, and encryption using jwt and bcrypt .
 Manage databases using MongoDB
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={git} alt="UI icon" style={{width:"40px", height:"40px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Version control system</h3>
              <p>
              I use Git to track and manage code changes. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};