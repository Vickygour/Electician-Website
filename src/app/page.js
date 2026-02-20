import Image from "next/image";
import Navbar from "./Header/page";
import HeroSection from "./Herosection/page";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
