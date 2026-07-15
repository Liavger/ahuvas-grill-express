import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LunchBanner from "@/components/LunchBanner";
import Marquee from "@/components/Marquee";
import Editorial from "@/components/Editorial";
import FreshDaily from "@/components/FreshDaily";
import SignatureFavorite from "@/components/SignatureFavorite";
import OurSpace from "@/components/OurSpace";
import Catering from "@/components/Catering";
import Reviews from "@/components/Reviews";
import OurStory from "@/components/OurStory";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LunchBanner />
      <Marquee />
      <Editorial />
      <FreshDaily />
      <SignatureFavorite />
      <OurSpace />
      <Catering />
      <Reviews />
      <OurStory />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}
