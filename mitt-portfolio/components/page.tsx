import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <div className="mx-auto max-w-2xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <Hero />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
