import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import Affiliate from "@/components/home/Affiliate";
import CustomOrder from "@/components/home/CustomOrder";
import Features from "@/components/home/Features";
import Reviews from "@/components/home/Reviews";
import Stats from "@/components/home/Stats";
import BecomeSeller from "@/components/home/BecomeSeller";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "#FFF7ED",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
     <Features />

     <Categories />
     <FeaturedProducts />
     <Affiliate />
     <CustomOrder />
     <Reviews />   
     <Stats />
    <BecomeSeller />
    <FAQ />
   <Footer />

 </main>



  );
}
