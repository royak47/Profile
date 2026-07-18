"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          <span className="text-cyan-400">M</span>itt
          <span className="text-cyan-400">Y</span>dv
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 transition hover:text-cyan-400"
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Hire Me */}
        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400 md:block"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-white/5 hover:text-cyan-400"
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
