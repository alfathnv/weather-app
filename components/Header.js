import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import { IconSearch, IconLogo } from "./assets/icons";

const Header = ({ countryID }) => {
  // const myLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  // };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <Image src={IconSearch} width={60} height={60} /> */}
        <h1>An IBM Business</h1>
        <input type="text" value="" placeholder="Search City or Zip Code" />
        <div>{countryID} | °F</div>
      </div>
    </div>
  );
};

export default Header;
