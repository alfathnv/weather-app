import React from "react";
import styles from "../styles/Navbar.module.scss";

const datas = [
  {
    name: "Today",
  },
  {
    name: "Hourly",
  },
  {
    name: "10 Day",
  },
  {
    name: "Weekend",
  },
  {
    name: "Monthly",
  },
  {
    name: "Radar",
  },
  {
    name: "Video",
  },
  {
    name: "More Forecasts",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      {datas &&
        datas.map((data, index) => (
          <div key={index} className={styles.tab}>
            {data.name}
          </div>
        ))}
    </div>
  );
};

export default Navbar;
