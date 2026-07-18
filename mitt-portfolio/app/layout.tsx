import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900" />

      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px] animate-pulse" />

      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[170px]" />

      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-pink-500/15 blur-[170px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:35px_35px]" />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Stats */}
        <section
          id="about"
          className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <Stats />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg transition hover:scale-110"
      >
        ↑
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-xl transition hover:scale-110"
      >
        💬
      </a>

    </main>
  );
}
