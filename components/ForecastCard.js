import React from "react";
import styles from "../styles/ForecastCard.module.scss";

const datas = [
  {
    name: "Morning",
    temperature: "88",
    icon: "",
    percentage: 0,
  },
  {
    name: "Afternoon",
    temperature: "89",
    icon: "",
    percentage: 5,
  },
  {
    name: "Evening",
    temperature: "82",
    icon: "",
    percentage: 15,
  },
  {
    name: "Overnight",
    temperature: "79",
    icon: "",
    percentage: 15,
  },
];

const ForecastCard = () => {
  return (
    <div className={styles.container}>
      <h2>{"Today's forecast for Pusakarakyat, West Java, Indonesia"}</h2>
      <div className={styles.content}>
        {datas &&
          datas.map((data, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.time}>{data.name}</div>
              <h1>{data.temperature}</h1>
              <p>{data.percentage}%</p>
            </div>
          ))}
      </div>
      <div className={styles.button}>
        <p>Next Hours</p>
      </div>
    </div>
  );
};

export default ForecastCard;
