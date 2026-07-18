import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <Hero />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
