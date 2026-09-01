export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-[#FFF7ED] text-[#3B2923] flex flex-col justify-center items-center text-center px-6 py-16">

      <p className="text-[#C85A36] tracking-[4px] text-sm md:text-base mb-4">
        ✨ HANDMADE WITH LOVE ✨
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C85A36]">
        Zinam Marketplace
      </h1>

      <h2 className="mt-6 max-w-3xl text-xl sm:text-2xl md:text-3xl font-semibold">
        Premium Handmade Crochet & Digital Products Marketplace
      </h2>

      <p className="mt-6 max-w-3xl text-[#3B2923] text-base sm:text-lg leading-8">
        Discover unique handmade crochet products, premium digital templates,
        gifts, and creative collections crafted with love by talented sellers.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <button className="bg-[#C85A36] text-[#3B2923] px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          🛍 Explore Store
        </button>

        <button className="border-2 border-[#C85A36] text-[#C85A36] px-8 py-4 rounded-xl font-bold hover:bg-[#C85A36] hover:text-[#3B2923] transition">
          Become a Seller
        </button>
      </div>

    </section>
  );
}




