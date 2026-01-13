import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyParikshe from "@/components/WhyParikshe";
import AppPromo from "@/components/AppPromo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyParikshe />
      <AppPromo />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
