// import React from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedProperties.module.css";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

const properties = [
  {
    id: 1,
    type: "villa",
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    price: "$395,000",
    beds: 4,
    baths: 1,
    size: 400,
    image: photo3,
    status: ["For Sale", "Featured"],
  },
  {
    id: 2,
    type: "apartment",
    title: "Skyper Pool Apartment",
    location: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    size: 450,
    image: photo2,
    status: ["For Sale"],
  },
  {
    id: 3,
    type: "apartment",
    title: "Skyper Pool Apartment",
    location: "1020 Bloomingdale Ave",
    price: "$280,000",
    beds: 4,
    baths: 2,
    size: 450,
    image: photo2,
    status: ["For Sale"],
  },
  {
    id: 4,
    type: "villa",
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    price: "$395,000",
    beds: 4,
    baths: 1,
    size: 400,
    image: photo3,
    status: ["For Sale", "Featured"],
  },
];

export default function FeaturedProperties() {
  return (
    <>
      <section className={styles.container}>
        <h2>Featured Properties</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className={styles.grid}>
          {properties.map((property) => (
            <div key={property.id} className={styles.card}>
              <img
                src={property.image}
                alt={property.title}
                className={styles.image}
              />
              <div className={styles.tags}>
                {property.status.map((tag, index) => (
                  <span
                    key={index}
                    className={`${styles.tag} ${
                      tag === "For Sale"
                        ? styles.sale
                        : tag === "For Rent"
                        ? styles.rent
                        : styles.featured
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.details}>
                <h3>{property.title}</h3>
                <p>
                  <FaMapMarkerAlt /> {property.location}
                </p>
                <div className={styles.info}>
                  <span>
                    <FaBed /> {property.beds}
                  </span>
                  <span>
                    <FaBath /> {property.baths}
                  </span>
                  <span>
                    <FaRulerCombined /> {property.size} sqft
                  </span>
                </div>
                <p className={styles.price}>{property.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigate to All Properties Page */}
        <div className={styles.buttonContainer}>
          <Link to="/all-properties">
            <button className={styles.showButton}>Show All</button>
          </Link>
        </div>
      </section>
    </>
  );
}
