// import React from "react";
import { Link } from "react-router-dom";
// import styles from "./FeaturedProperties.module.css";
import styles from "./AllProperties.module.css";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

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
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
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
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Sale"],
  },
  {
    id: 3,
    type: "office",
    title: "North Dillard Street",
    location: "4330 Bell Shoals Rd",
    price: "$250/month",
    beds: 4,
    baths: 2,
    size: 400,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Rent"],
  },
  {
    id: 4,
    type: "villa",
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    price: "$180,000",
    beds: 4,
    baths: 2,
    size: 450,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Sale", "Featured"],
  },
  {
    id: 5,
    type: "apartment",
    title: "New Apartment Nice View",
    location: "42 Waverne 0, Brooklyn",
    price: "$850/month",
    beds: 4,
    baths: 2,
    size: 450,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Rent", "Featured"],
  },
  {
    id: 6,
    type: "villa",
    title: "Diamond Manor Apartment",
    location: "7802 20th Ave, Brooklyn",
    price: "$259,000",
    beds: 4,
    baths: 2,
    size: 450,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Sale", "Featured"],
  },
  {
    id: 7,
    type: "villa",
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    price: "$180,000",
    beds: 4,
    baths: 2,
    size: 450,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Sale", "Featured"],
  },
  {
    id: 8,
    type: "apartment",
    title: "New Apartment Nice View",
    location: "42 Waverne 0, Brooklyn",
    price: "$850/month",
    beds: 4,
    baths: 2,
    size: 450,
    image: "src/assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg",
    status: ["For Rent", "Featured"],
  },
];

export default function AllProperties() {
  return (
    <section className={styles.container}>
      <h2>All Properties</h2>
      <p>Browse through all available properties.</p>

      <div className={styles.grid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.card}>
            <img
              src={property.image}
              alt={property.title}
              className={styles.image}
            />
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

      {/* Navigate Back to Home */}
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button className={styles.showButton}>Go Back</button>
        </Link>
      </div>
    </section>
  );
}
