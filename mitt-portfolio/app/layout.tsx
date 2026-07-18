import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[120px]" />
      <div className="absolute top-1/2 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <Hero />

          <div className="my-14 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <Stats />

          <div className="my-14 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />

          <Contact />

          <div className="mt-16 border-t border-white/10 pt-8">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
