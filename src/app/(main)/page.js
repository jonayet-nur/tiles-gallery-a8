import Banner from "@/Components/Banner";
import FeatureTiles from "@/Components/FeatureTiles";
import Marquee from "@/Components/Marquee";
import tilesData from "@/data";
import Image from "next/image";

export default async function Home() {
  const data = await tilesData()
  return (
   <div>
    <Banner></Banner>
    <Marquee data={data}></Marquee>
    <FeatureTiles data={data}></FeatureTiles>
   </div>


  
  );
}
