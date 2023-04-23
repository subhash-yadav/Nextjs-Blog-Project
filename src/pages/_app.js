import "@/styles/globals.css";
import NavBar from "@/Components/NavBar/NavBar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
