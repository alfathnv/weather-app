import React from "react";
import styles from "../styles/MapInformation.module.scss";

const MapInformation = () => {
  return (
    <div className={styles.container}>
      <h2>Hurricane Central</h2>
      <div className={styles.map}>
        <div className={styles.header}></div>
        <div className={styles.footer}></div>
      </div>
      <div className={styles.button}>
        <p>Track Storm</p>
      </div>
    </div>
  );
};

export default MapInformation;
