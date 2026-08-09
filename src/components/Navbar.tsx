"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-[#D4AF37]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-3xl font-bold text-[#D4AF37]">
          Zinam
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-white">
          <Link href="/" className="hover:text-[#D4AF37] transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-[#D4AF37] transition">
            Shop
          </Link>

          <Link href="/categories" className="hover:text-[#D4AF37] transition">
            Categories
          </Link>

          <Link href="#" className="hover:text-[#D4AF37] transition">
            Become Seller
          </Link>

          <Link href="#" className="hover:text-[#D4AF37] transition">
            Contact
          </Link>

          <button type="button" className="bg-[#D4AF37] text-black font-bold px-5 py-2 rounded-lg">
            Login
          </button>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl p-2 rounded-lg"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#D4AF37]/40 px-5 py-5">
          <nav className="flex flex-col">
            <Link href="/" onClick={closeMenu} className="text-white py-4 border-b border-white/10">
              Home
            </Link>

            <Link href="/shop" onClick={closeMenu} className="text-white py-4 border-b border-white/10">
              Shop
            </Link>

            <Link href="/categories" onClick={closeMenu} className="text-white py-4 border-b border-white/10">
              Categories
            </Link>

            <Link href="#" onClick={closeMenu} className="text-white py-4 border-b border-white/10">
              Become Seller
            </Link>

            <Link href="#" onClick={closeMenu} className="text-white py-4 border-b border-white/10">
              Contact
            </Link>

            <button type="button" onClick={closeMenu} className="mt-5 bg-[#D4AF37] text-black font-bold rounded-xl py-3">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
