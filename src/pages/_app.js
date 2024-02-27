import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

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
