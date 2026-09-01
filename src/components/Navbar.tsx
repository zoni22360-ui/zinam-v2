"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B8D8CC] bg-[#FFF9F1]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">

        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src="/zinam-logo.png"
            alt="Zinam logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-[30px] font-serif italic font-semibold tracking-[-0.03em] text-[#B85C3A]">
            Zinam
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[#24433A] hover:text-[#B85C3A]">
            Home
          </Link>

          <Link href="/shop" className="text-[#24433A] hover:text-[#B85C3A]">
            Shop
          </Link>

          <Link href="/categories" className="text-[#24433A] hover:text-[#B85C3A]">
            Categories
          </Link>

          <Link href="#" className="text-[#24433A] hover:text-[#B85C3A]">
            Become Seller
          </Link>

          <Link href="#" className="text-[#24433A] hover:text-[#B85C3A]">
            Contact
          </Link>

          <button
            type="button"
            className="rounded-xl bg-[#B85C3A] px-5 py-2.5 font-bold text-white hover:bg-[#9F4D30]"
          >
            Login
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-[60] rounded-lg p-2 text-4xl leading-none text-[#3B2923] md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#B8D8CC] bg-[#FFF9F1] px-5 py-4 md:hidden">
          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-[#E6D5CC] py-4 font-medium text-[#24433A]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="border-b border-[#E6D5CC] py-4 font-medium text-[#24433A]"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="border-b border-[#E6D5CC] py-4 font-medium text-[#24433A]"
            >
              Categories
            </Link>

            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="border-b border-[#E6D5CC] py-4 font-medium text-[#24433A]"
            >
              Become Seller
            </Link>

            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="border-b border-[#E6D5CC] py-4 font-medium text-[#24433A]"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-xl bg-[#B85C3A] py-3 font-bold text-white hover:bg-[#9F4D30]"
            >
              Login
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}
