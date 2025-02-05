// import React from "react";
import styles from "./WhyUs.module.css";
import { FaRegFileAlt, FaHome, FaShieldAlt } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <h2>Why You Should Work With Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <FaRegFileAlt className={styles.icon} />
          <h3>Wide Range of Properties</h3>
          <p>We offer expert legal help for all related property items in Dubai.</p>
        </div>
        <div className={styles.feature}>
          <FaHome className={styles.icon} />
          <h3>Buy or Rent Homes</h3>
          <p>We sell your home at the best market price and very quickly as well.</p>
        </div>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.icon} />
          <h3>Trusted by Thousands</h3>
          <p>We offer you free consultancy to get a loan for your new home.</p>
        </div>
      </div>
    </section>
  );
}
