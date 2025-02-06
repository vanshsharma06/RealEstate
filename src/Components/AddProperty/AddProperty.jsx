import { useState } from "react";
import styles from "./AddProperty.module.css"; // Update the path if necessary

const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    images: [],
    location: "",
    size: "",
    rooms: "",
  });

  const handleImageUpload = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      images: [...e.target.files],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Details:", propertyDetails);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Property</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className={styles.formGroup}>
          <label>Upload Property Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className={styles.fileInput}
          />
        </div>

        {/* Location Input */}
        <div className={styles.formGroup}>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={propertyDetails.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            className={styles.inputField}
          />
        </div>

        {/* Property Size */}
        <div className={styles.formGroup}>
          <label>Property Size (sq.ft)</label>
          <input
            type="number"
            name="size"
            value={propertyDetails.size}
            onChange={handleInputChange}
            placeholder="Size in square feet"
            required
            className={styles.inputField}
          />
        </div>

        {/* Number of Rooms */}
        <div className={styles.formGroup}>
          <label>Number of Rooms</label>
          <input
            type="number"
            name="rooms"
            value={propertyDetails.rooms}
            onChange={handleInputChange}
            placeholder="Number of rooms"
            required
            className={styles.inputField}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
