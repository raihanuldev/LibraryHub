import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import TopBook from "@/components/topBook/TopBook";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Banner/>
      <TopBook/>
      <Categories/>
    </main>
  );
}
