import NearlyLibabry from "@/components/NearlyLibabry/NearlyLibabry";
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
      <Banner/>
      <TopBook/>
      <Categories/>
      <HowtoUse/>
      <Resource/>
      <NearlyLibabry/>
    </main>
  );
}
