// import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.left}>LOGO</div>
            <div className={styles.mid}>
              <ul>
                <li>Home</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.right}>
              <FaPhoneAlt className={styles.icon} />
              <button>Add Property</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
