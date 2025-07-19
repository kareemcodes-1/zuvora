// "use client";
// import { useEffect } from "react";
import About from "../components/about";
import Collections from "../components/collections/collections";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Hero from "../components/hero";
import dbConnect from "../../lib/dbConnect";
import Products from "../components/products/products";
import Testimonials from "../components/testimonials";
import VideoPreview from "../components/video-preview";
import LenisProvider from "../providers/lenis-provider";
import Navbar from "../components/navbar/navbar";



export default function Home() {


  return (
     <LenisProvider>
          <Navbar />
          <Hero />

          <About />

        <Collections />
       <Products />
       <CTA />
  
       <VideoPreview />

       <Testimonials />
        <Footer />
     </LenisProvider>
  );
}
