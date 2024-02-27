import { SessionProvider } from "next-auth/react"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return
  <SessionProvider session={pageProps.session}>
    <div className="">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>;
  </SessionProvider>
}
