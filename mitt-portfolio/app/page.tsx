import TerminalWindow from "@/components/TerminalWindow";
import Hero from "@/components/Hero";
import Uptime from "@/components/Uptime";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Visitors from "@/components/Visitors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <TerminalWindow>
        <Hero />
        <Uptime />
        <About />
        <Socials />
        <Visitors />
        <Contact />
        <Footer />
      </TerminalWindow>
    </main>
  );
}
