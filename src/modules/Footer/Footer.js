import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <span>Developed by: </span>
          <span style={{ fontWeight: "bold" }}>Marco Grimaldo</span>
        </div>
        <div className={styles.item}>
          <span>2023</span>
        </div>
        <div className={styles.item}>
          <span>Made with: </span>
          <a
            href="https://react-bootstrap.netlify.app/"
            className={styles.itemLink}
          >
            React Bootstrap
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
