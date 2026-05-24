import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import ForWho from "@/components/sections/ForWho";
import BetaForm from "@/components/sections/BetaForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ForWho />
        <BetaForm />
      </main>
      <Footer />
    </>
  );
}
