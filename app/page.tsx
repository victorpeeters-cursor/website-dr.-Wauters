import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import PracticalInfo from "@/components/PracticalInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBanner from "@/components/StickyBanner";
import FloatingCTA from "@/components/FloatingCTA";
import { client } from "@/sanity/lib/client";
import {
  doctorsQuery,
  faqQuery,
  expertiseQuery,
  pageContentQuery,
  siteSettingsQuery,
  practicalInfoQuery,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const [doctors, faqs, expertises, pageContent, siteSettings, practicalInfoItems] =
    await Promise.all([
      client.fetch(doctorsQuery),
      client.fetch(faqQuery),
      client.fetch(expertiseQuery),
      client.fetch(pageContentQuery),
      client.fetch(siteSettingsQuery),
      client.fetch(practicalInfoQuery),
    ]);

  const bannerEnabled = siteSettings?.bannerEnabled ?? false;

  return (
    <>
      <StickyBanner enabled={bannerEnabled} settings={siteSettings} />
      <Header settings={siteSettings} />
      <main>
        <Hero content={pageContent} />
        <Specialists doctors={doctors} content={pageContent} />
        <Expertise items={expertises} content={pageContent} />
        <FAQ items={faqs} content={pageContent} />
        <PracticalInfo items={practicalInfoItems} content={pageContent} />
        <Contact settings={siteSettings} />
      </main>
      <Footer settings={siteSettings} />
      <FloatingCTA settings={siteSettings} />
    </>
  );
}
