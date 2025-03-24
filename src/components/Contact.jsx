import React from "react";

import styles from "./Contact.module.css";
import linkedIn from "../assets/linkedin_2504923.png"
import github from "../assets/github_2504911.png"
import gmail from "../assets/gmail_2875435.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={gmail} alt="Email icon" style={{width:"40px", height:"40px"}}/> 
          <a href="https://sibusisomatebese75@gmail.com">
           Email
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedIn}
            alt="LinkedIn icon"
            style={{width:"40px", height:"40px"}}          /> 
          <a href="https://www.linkedin.com/in/sibusiso-matebese-8a0600265">Linkedin</a>
        </li>
        <li className={styles.link}>
         <img src={github} alt="Github icon" style={{width:"40px", height:"40px"}}    /> 
          <a href="https://github.com/Sibusiso75">Github</a>
        </li>
      </ul>
    </footer>
  );
};