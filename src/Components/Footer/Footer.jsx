import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.text}>
            We provide the best real estate deals in city with trusted agents
            and secure transactions.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Quick Links</h2>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Properties
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Agents
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.text}>123 Real Estate Ave, City, Country</p>
          <p className={styles.text}>Email: contact@realestate.com</p>
          <p className={styles.text}>Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.icon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.icon}>
              <FaInstagram />
            </a>
            <a href="#" className={styles.icon}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className={styles.bottomText}>
        &copy; 2025 Real Estate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
