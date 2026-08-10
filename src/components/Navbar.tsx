"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#B8E0D2] border-b border-[#78B9A5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-3xl font-bold text-[#78B9A5]">
          Zinam
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-[#24433A]">
          <Link href="/" className="hover:text-[#78B9A5] transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-[#78B9A5] transition">
            Shop
          </Link>

          <Link href="/categories" className="hover:text-[#78B9A5] transition">
            Categories
          </Link>

          <Link href="#" className="hover:text-[#78B9A5] transition">
            Become Seller
          </Link>

          <Link href="#" className="hover:text-[#78B9A5] transition">
            Contact
          </Link>

          <button type="button" className="bg-[#78B9A5] text-[#24433A] font-bold px-5 py-2 rounded-lg">
            Login
          </button>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#24433A] text-3xl p-2 rounded-lg"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F8FCF9] border-t border-[#78B9A5]/40 px-5 py-5">
          <nav className="flex flex-col">
            <Link href="/" onClick={closeMenu} className="text-[#24433A] py-4 border-b border-white/10">
              Home
            </Link>

            <Link href="/shop" onClick={closeMenu} className="text-[#24433A] py-4 border-b border-white/10">
              Shop
            </Link>

            <Link href="/categories" onClick={closeMenu} className="text-[#24433A] py-4 border-b border-white/10">
              Categories
            </Link>

            <Link href="#" onClick={closeMenu} className="text-[#24433A] py-4 border-b border-white/10">
              Become Seller
            </Link>

            <Link href="#" onClick={closeMenu} className="text-[#24433A] py-4 border-b border-white/10">
              Contact
            </Link>

            <button type="button" onClick={closeMenu} className="mt-5 bg-[#78B9A5] text-[#24433A] font-bold rounded-xl py-3">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
