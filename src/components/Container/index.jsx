import React from "react";
import styles from "./styles.module.css";

// Standard wrapper component for the content of the application
export const Container = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};
