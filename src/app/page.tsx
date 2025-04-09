// import Buttons from "@/components/Buttons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Third from "@/components/Third";
import Images from "@/components/Images";
import FourthHero from "@/components/FourthHero";
import { CardDemo } from "@/components/Cards";
import Dashboard from "@/components/Dashboard";
import Discover from "@/components/Discover";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Robots from "@/components/Robots";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <Navbar />
          <Hero />
          {/* <Buttons /> */}
          <Third />
          <Images />
          <FourthHero />
          <Robots />
          <CardDemo />
          <Dashboard />
          <Discover />
          <FAQ />
          <GetStarted />
          <Footer />
    </main>
  );
}
