export default function CategoriesPage() {
  const categories = [
    {
      title: "Handmade Crochet",
      description: "Premium crochet bags, flowers, dolls & gifts.",
    },
    {
      title: "Digital Products",
      description: "Templates, planners, ebooks and printable files.",
    },
    {
      title: "Home Decor",
      description: "Beautiful handmade decorative products.",
    },
    {
      title: "Accessories",
      description: "Keychains, purses, wallets and fashion items.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-[#D4AF37] text-center mb-3">
        Categories
      </h1>

      <p className="text-center text-gray-400 mb-10">
        Explore all premium collections available on Zinam Marketplace.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <div
            key={item.title}
            className="border border-[#D4AF37] rounded-2xl p-6 hover:bg-[#D4AF37] hover:text-black transition"
          >
            <h2 className="text-xl font-bold mb-3">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
