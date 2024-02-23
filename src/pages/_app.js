import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div className="px-5">
  <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </div>;
}
