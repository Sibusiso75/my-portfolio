
import styles from "./ProjectCard.module.css";
import {FaGithub, FaLink} from "react-icons/fa"
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
     <img
        src={imageSrc}
        alt=""
        
        className={styles.image}
        /> 
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
        Repo <FaGithub/>
        </a>
        <a href={source} className={styles.link}>
         Website <FaLink/>
        </a>
      </div>
    </div>
  );
};