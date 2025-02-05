import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className={styles.navbar}>
            {/* Left Section: Hamburger + Logo */}
            <div className={styles.leftSection}>
              <div className={styles.hamburger} onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>
              <div className={styles.logo}>LOGO</div>
            </div>

            {/* Normal Navbar */}
            {!isOpen && (
              <div className={styles.mid}>
                <ul>
                  <li>Home</li>
                  <li>Listings</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            )}

            {/* Right Section */}
            <div className={styles.right}>
              <FaPhoneAlt className={styles.icon} />
              <button>Add Property</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`${styles.sidebar} ${isOpen ? styles.show : ""}`}>
            <ul>
              <li onClick={toggleSidebar}>Home</li>
              <li onClick={toggleSidebar}>Listings</li>
              <li onClick={toggleSidebar}>Blog</li>
              <li onClick={toggleSidebar}>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
