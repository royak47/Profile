import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Toolkit from "@/components/Toolkit";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        <Hero />
        <Toolkit />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
