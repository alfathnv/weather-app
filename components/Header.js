import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import IconSearch from "./assets/icons/icon_search.svg";
import IconLogo from "./assets/icons/icon_logo.svg";

const Header = () => {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>An IBM Business</h1>
        <input type="text" value="" placeholder="Search City or Zip Code" />
        <div>US | F</div>
      </div>
    </div>
  );
};

export default Header;
