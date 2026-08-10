"use client";

import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      title: "Handmade Crochet",
      icon: "🧶",
      description: "Premium crochet bags, dolls, flowers, toys and handmade gifts.",
    },
    {
      title: "Bags & Accessories",
      icon: "👜",
      description: "Handmade purses, wallets, keychains and stylish accessories.",
    },
    {
      title: "Gifts",
      icon: "🎁",
      description: "Beautiful handmade gifts for birthdays, weddings and special moments.",
    },
    {
      title: "Toys & Dolls",
      icon: "🧸",
      description: "Cute handmade dolls, teddy bears and unique crochet toys.",
    },
    {
      title: "Digital Products",
      icon: "📱",
      description: "Templates, planners, ebooks, printables and useful digital files.",
    },
    {
      title: "Home Decor",
      icon: "🏠",
      description: "Elegant handmade products to make your home more beautiful.",
    },
    {
      title: "Custom Orders",
      icon: "✨",
      description: "Request personalized handmade products made especially for you.",
    },
    {
      title: "Small Business Sellers",
      icon: "👩‍💼",
      description: "Discover products from talented small business owners in Pakistan.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FCF9] text-[#24433A]">

      {/* Hero */}
      <section className="px-6 py-20 text-center border-b border-[#78B9A5]/20">

        <p className="text-[#78B9A5] font-semibold tracking-[3px] text-sm mb-4">
          ZINAM MARKETPLACE
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#78B9A5] mb-5">
          Explore Categories
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-8">
          Discover handmade treasures, beautiful gifts, digital products
          and unique creations from talented sellers across Pakistan.
        </p>

      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item) => (

            <Link
              href="/shop"
              key={item.title}
              className="group"
            >

              <div className="h-full bg-[#FFFFFF] border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#78B9A5] hover:shadow-[0_10px_35px_rgba(212,175,55,0.12)]">

                <div className="text-5xl mb-6">
                  {item.icon}
                </div>

                <h2 className="text-xl font-bold text-[#24433A] group-hover:text-[#78B9A5] transition mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm leading-6">
                  {item.description}
                </p>

                <div className="mt-6 text-[#78B9A5] text-sm font-semibold">
                  Explore →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto rounded-3xl border border-[#78B9A5]/30 bg-[#FFFFFF] p-10 text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-[#24433A] mb-4">
            Can't find what you're looking for?
          </h2>

          <p className="text-gray-400 mb-7">
            Browse our complete marketplace or request a custom handmade order.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-[#78B9A5] text-[#24433A] font-bold px-7 py-3 rounded-xl hover:scale-105 transition"
          >
            Visit Shop
          </Link>

        </div>

      </section>

    </main>
  );
}
