import { useState } from "react";
import styles from "./FeaturedProperties2.module.css";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

const properties = [
  {
    id: 1,
    type: "Villa",
    title: "Luxury Family Home",
    price: "$395,000",
    location: "1800-1818 79th St",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 2,
    type: "Apartment",
    title: "Skyper Pool Apartment",
    price: "$280,000",
    location: "1020 Bloomingdale Ave",
    img: photo2,
    tags: ["For Sale"],
  },
  {
    id: 3,
    type: "Office",
    title: "North Dillard Street",
    price: "$250/month",
    location: "4330 Bell Shoals Rd",
    img: photo2,
    tags: ["For Rent"],
  },
  {
    id: 4,
    type: "Penthouse",
    title: "Eaton Garth Penthouse",
    price: "$180,000",
    location: "7722 18th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 5,
    type: "Apartment",
    title: "New Apartment Nice View",
    price: "$850/month",
    location: "42 Avenue Q, Brooklyn",
    img: photo2,
    tags: ["For Rent", "Featured"],
  },
  {
    id: 6,
    type: "Villa",
    title: "Diamond Manor Apartment",
    price: "$259,000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 7,
    type: "Villa",
    title: "Diamond Manor Apartment",
    price: "$259,0000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 8,
    type: "Villa",
    title: "Diamond Manor Apartment",
    price: "$259,0000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 9,
    type: "Office",
    title: "Diamond Manor Apartment",
    price: "$259,0000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 10,
    type: "Office",
    title: "Diamond Manor Apartment",
    price: "$259,0000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
  {
    id: 11,
    type: "Office",
    title: "Diamond Manor Apartment",
    price: "$259,0000",
    location: "7802 20th Ave, Brooklyn",
    img: photo2,
    tags: ["For Sale", "Featured"],
  },
];

export default function FeaturedProperties2() {
  const [filter, setFilter] = useState("All");

  const filteredProperties = properties.filter(
    (property) => filter === "All" || property.type === filter
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Properties</h2>
      <p className={styles.subtitle}>
        Find your dream home from our featured listings.
      </p>

      <div className={styles.buttons}>
        {["All", "Villa", "Apartment", "Office"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${styles.filterButton} ${
              filter === category ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProperties.map((property) => (
          <div key={property.id} className={styles.card}>
            <img
              src={property.img}
              alt={property.title}
              className={styles.cardImg}
            />
            <div className={styles.cardContent}>
              <div className={styles.tags}>
                {property.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${styles.tag} ${
                      tag === "For Sale" ? styles.sale : styles.featured
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.cardTitle}>{property.title}</h3>
              <p className={styles.cardLocation}>{property.location}</p>
              <p className={styles.cardPrice}>{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
