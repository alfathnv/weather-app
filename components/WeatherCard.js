import React, { useEffect } from "react";
import styles from "../styles/WeatherCard.module.scss";

const WeatherCard = ({ temperature, humidity, condition }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>Pusakarakyat, West Java, Indonesia Weather</h3>
        <p>as of 12:07 pm WIB</p>
        <h1>{Math.round(temperature)}°</h1>
        <h2>{condition}</h2>
        <h4>10% chance of rain through 1 pm</h4>
      </div>
      <div className={styles.right}>
        <h2>
          {Math.round(temperature)}° / {humidity}°
        </h2>
      </div>
    </div>
  );
};

export default WeatherCard;
