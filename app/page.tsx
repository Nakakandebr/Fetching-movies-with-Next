'use client';
import Navbar from "./Navbar/page";
import Footer from "./Footer/pages";
import SliderCarousel from "./SliderCarousel/page";
import CategoroesList from "./Categories/page";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <SliderCarousel/>

      <CategoroesList/>
      <Footer/>

    </main>
  );
}