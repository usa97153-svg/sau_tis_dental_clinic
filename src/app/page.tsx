import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Branches from "@/components/sections/Branches";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Branches />
      <Pricing />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
