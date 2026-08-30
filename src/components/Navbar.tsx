"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#D7E8DF] bg-[#FFFDF8]/95 shadow-[0_2px_14px_rgba(36,67,58,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Zinam Store Home"
        >
          <img
            src="/favicon.png"
            alt="Zinam logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-[28px] font-extrabold tracking-[-0.04em] text-[#4E927B] transition group-hover:text-[#397A66]">
            Zinam
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[#24433A] transition hover:text-[#78B9A5]">
            Home
          </Link>

          <Link href="/shop" className="text-[#24433A] transition hover:text-[#78B9A5]">
            Shop
          </Link>

          <Link href="/categories" className="text-[#24433A] transition hover:text-[#78B9A5]">
            Categories
          </Link>

          <Link href="#" className="text-[#24433A] transition hover:text-[#78B9A5]">
            Become Seller
          </Link>

          <Link href="#" className="text-[#24433A] transition hover:text-[#78B9A5]">
            Contact
          </Link>

          <button
            type="button"
            className="rounded-xl bg-[#78B9A5] px-5 py-2.5 font-bold text-[#17352C] transition hover:bg-[#69AD98]"
          >
            Login
          </button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-3xl text-[#24433A] md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#D7E8DF] bg-[#FFFDF8] px-5 py-5 md:hidden">
          <nav className="flex flex-col">
            <Link href="/" onClick={closeMenu} className="border-b border-[#E5EFEA] py-4 text-[#24433A]">
              Home
            </Link>

            <Link href="/shop" onClick={closeMenu} className="border-b border-[#E5EFEA] py-4 text-[#24433A]">
              Shop
            </Link>

            <Link href="/categories" onClick={closeMenu} className="border-b border-[#E5EFEA] py-4 text-[#24433A]">
              Categories
            </Link>

            <Link href="#" onClick={closeMenu} className="border-b border-[#E5EFEA] py-4 text-[#24433A]">
              Become Seller
            </Link>

            <Link href="#" onClick={closeMenu} className="border-b border-[#E5EFEA] py-4 text-[#24433A]">
              Contact
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="mt-5 rounded-xl bg-[#78B9A5] py-3 font-bold text-[#17352C]"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
