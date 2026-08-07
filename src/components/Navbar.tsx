"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-[#D4AF37]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        <h1 className="text-3xl font-bold text-[#D4AF37]">
          Zinam
        </h1>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="#">Become Seller</a>
          <a href="#">Contact</a>

          <button>
            Login
          </button>
        </nav>

       <button
  className="md:hidden text-white text-3xl"
  onClick={() => {
    alert("Menu Clicked");
    setOpen(!open);
  }}
>
  ☰
</button>

      </div>

      {open && (
  <div className="md:hidden bg-black border-t border-[#D4AF37] flex flex-col p-4 space-y-4">

    <a href="/" className="text-white hover:text-[#D4AF37]">
      Home
    </a>

    <a href="/shop" className="text-white hover:text-[#D4AF37]">
      Shop
    </a>

    <a href="#" className="text-white hover:text-[#D4AF37]">
      Categories
    </a>

    <a href="#" className="text-white hover:text-[#D4AF37]">
      Become Seller
    </a>

    <a href="#" className="text-white hover:text-[#D4AF37]">
      Contact
    </a>

    <button className="bg-[#D4AF37] text-black font-bold rounded-lg py-2">
      Login
    </button>

  </div>
)}
    </header>
  );
}
