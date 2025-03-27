import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
        

          onClick={() => setMenuOpen(!menuOpen)}
        >
    {menuOpen? <FaRegWindowClose/>: <FiMenu />
    }
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
};