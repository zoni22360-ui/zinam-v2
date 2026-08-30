"use client";

import { useEffect, useState } from "react";

const slides = [
  "/products/crochet-flower-bag.jpg",
  "/products/crochet-flower-bag-1.jpg",
  "/products/crochet-flower-bag-2.jpg",
  "/products/crochet-flower-bag-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FCF9]">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1500px] items-stretch lg:grid-cols-1">

        {/* Left content */}
        <div className="flex items-center px-7 py-16 sm:px-10 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-6xl text-center lg:mx-0 lg:text-left">

            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-[#78B9A5]">
              ✨ PREMIUM HANDMADE MARKETPLACE
            </p>

            <h1 className="text-6xl font-extrabold leading-[1.03] tracking-[-0.045em] text-[#4E927B] sm:text-7xl lg:text-[clamp(4rem,7vw,7rem)]">
              Welcome to
              <span className="mt-2 block">Zinam</span>
            </h1>

            <p className="mt-7 max-w-5xl w-full text-lg leading-8 text-[#5F756D] sm:text-xl">
              Discover premium handmade crochet products, digital downloads,
              personalized gifts and support talented small business owners
              from Pakistan.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row justify-center">
              <a
                href="/shop"
                className="rounded-xl bg-[#78B9A5] px-8 py-4 text-center font-bold text-[#17352C] shadow-[0_10px_25px_rgba(120,185,165,0.25)] transition hover:-translate-y-0.5 hover:bg-[#69AD98]"
              >
                🛍️ Shop Now
              </a>

              <a
                href="#custom-order"
                className="rounded-xl border-2 border-[#78B9A5] bg-white px-8 py-4 text-center font-bold text-[#4E927B] transition hover:bg-[#F1FAF6]"
              >
                ✨ Custom Order
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-[#60766E] justify-center">
              <span>🚚 Nationwide Delivery</span>
              <span>⭐ Premium Quality</span>
              <span>🧶 Handmade with Love</span>
            </div>

          </div>
        </div>

        {/* Large marketplace-style slider */}
        <div className="relative min-h-[420px] lg:min-h-0">

          {slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Zinam handmade crochet product"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FCF9]/20 via-transparent to-[#24433A]/10" />

          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#24433A] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            ‹
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#24433A] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            ›
          </button>

          {/* Slide indicator */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-4 py-2.5 shadow-md backdrop-blur">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-[#78B9A5]"
                    : "w-2.5 bg-[#B8E0D2]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
