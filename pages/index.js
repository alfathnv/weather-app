import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../components/api";
import ForecastCard from "../components/ForecastCard";
import MapInformation from "../components/MapInformation";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [coordinates, setCoordinates] = useState({
    lat: "",
    long: "",
  });
  const router = useRouter();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
    }
  }, [router]);

  useEffect(() => {
    if (coordinates.lat === "" || coordinates.long === "") return;

    const fetchData = async () => {
      const aw = await getCurrentWeather(coordinates.lat, coordinates.long);
      return console.log(aw);
    };
    fetchData();
  }, [coordinates]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <WeatherCard />
          <ForecastCard />
        </div>

        <div className={styles.right}>
          <MapInformation />
        </div>
      </main>
    </div>
  );
}
