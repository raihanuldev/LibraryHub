import Authors from "@/components/Authors/Authors";
import NearlyLibabry from "@/components/Authors/Authors";
import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import HowtoUse from "@/components/howTouse/HowtoUse";
import Resource from "@/components/resource/Resource";
import TopBook from "@/components/topBook/TopBook";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <title>Library Hub</title>
      <Banner/>
      <TopBook/>
      <Categories/>
      <HowtoUse/>
      <Resource/>
      <Authors/>
    </main>
  );
}
