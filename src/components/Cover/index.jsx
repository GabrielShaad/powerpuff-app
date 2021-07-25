import React from "react";
import LazyLoad from "react-lazyload";

import PlaceholderImage from "../../assets/placeholder.jpg";
import styles from "./styles.module.css";

// Create a Placeholder image Component
const Placeholder = () => {
  return (
    <img
      src={PlaceholderImage}
      className={styles.placeholder}
      alt="placeholder"
    />
  );
};

// Cover image component
export const Cover = ({ source }) => {
  return (
    // Define a LazyLoad component that behaves as a loader
    <LazyLoad height={500} className={styles.coverImage}>
      {/* Check if the image exists, if not show the Placeholder component instead */}
      {!!source ? <img src={source} alt="cover" /> : <Placeholder />}
    </LazyLoad>
  );
};
