import Header from "../components/Header";
import Location from "../components/Location";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Location />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
