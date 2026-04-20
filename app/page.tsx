import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import PracticalInfo from "@/components/PracticalInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBanner from "@/components/StickyBanner";

export default function Home() {
  // Set to true when practice is not accepting patients (will be CMS-controlled later)
  const isAcceptingPatients = true;

  return (
    <>
      <StickyBanner enabled={!isAcceptingPatients} />
      <Header />
      <main>
        <Hero />
        <Specialists />
        <Expertise />
        <FAQ />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

