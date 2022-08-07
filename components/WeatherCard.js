import React from "react";
import styles from "../styles/WeatherCard.module.scss";

const WeatherCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>Pusakarakyat, West Java, Indonesia Weather</h3>
        <p>as of 12:07 pm WIB</p>
        <h1>92</h1>
        <h2>Haze</h2>
        <h4>10% chance of rain through 1 pm</h4>
      </div>
      <div className={styles.right}>
        <h2>92 / 77</h2>
      </div>
    </div>
  );
};

export default WeatherCard;
