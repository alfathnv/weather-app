import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../components/api";
import Header from "../components/Header";
import Location from "../components/Location";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [coordinates, setCoordinates] = useState({
    lat: "",
    long: "",
  });
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");
  const [countryID, setCountryID] = useState("");
  const [cityName, setCityName] = useState("");

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
      const data = await getCurrentWeather(coordinates.lat, coordinates.long);
      console.log(data);
      setTemperature(((data.main.feels_like - 273.15) * 9) / 5 + 32);
      setHumidity(data.main.humidity);
      setCondition(data.weather[0].main);
      setCountryID(data.sys.country);
    };
    fetchData();
  }, [coordinates]);
  return (
    <>
      <Header countryID={countryID} />
      <Location />
      <Navbar />
      <Component
        {...pageProps}
        temperature={temperature}
        humidity={humidity}
        condition={condition}
      />
    </>
  );
}

export default MyApp;
