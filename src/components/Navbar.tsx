"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D7E8DF] bg-[#FFFDF8]/95 backdrop-blur-md shadow-[0_2px_14px_rgba(36,67,58,0.06)]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Zinam Store Home"
        >
          <span className="text-[28px] font-extrabold tracking-[-0.04em] text-[#4E927B] transition group-hover:text-[#397A66]">
            Zinam
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#29483E] transition-colors hover:text-[#4E927B]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm font-semibold text-[#29483E] transition-colors hover:text-[#4E927B]"
          >
            Shop
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-[#29483E] transition-colors hover:text-[#4E927B]"
          >
            Categories
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-[#29483E] transition-colors hover:text-[#4E927B]"
          >
            Become Seller
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-[#29483E] transition-colors hover:text-[#4E927B]"
          >
            Contact
          </Link>

          <button
            type="button"
            className="rounded-full bg-[#4E927B] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#397A66] hover:shadow-md"
          >
            Login
          </button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-full p-2.5 text-2xl leading-none text-[#29483E] transition hover:bg-[#EEF7F2] md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#D7E8DF] bg-[#FFFDF8] px-5 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-[#E7EFEA] py-4 text-sm font-medium text-[#29483E]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={closeMenu}
              className="border-b border-[#E7EFEA] py-4 text-sm font-semibold text-[#29483E]"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              onClick={closeMenu}
              className="border-b border-[#E7EFEA] py-4 text-sm font-medium text-[#29483E]"
            >
              Categories
            </Link>

            <Link
              href="#"
              onClick={closeMenu}
              className="border-b border-[#E7EFEA] py-4 text-sm font-medium text-[#29483E]"
            >
              Become Seller
            </Link>

            <Link
              href="#"
              onClick={closeMenu}
              className="border-b border-[#E7EFEA] py-4 text-sm font-medium text-[#29483E]"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="mt-5 rounded-full bg-[#4E927B] py-3 text-sm font-semibold text-white shadow-sm"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
