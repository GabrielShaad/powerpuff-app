import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

// Header Component with the title of the application
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link to="/">Powerpuff App</Link>
      </div>
    </header>
  );
};
