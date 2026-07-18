import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-neutral-950">
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <div className="mx-auto max-w-2xl px-6 py-12 pb-32 sm:py-16">
        <Hero />
        <Skills />
        <Projects />
        <GithubStats />
        <Stats />
        <Contact />
        <Footer />
      </div>
      <SocialDock />
      <WhatsAppButton />
    </main>
  );
}
