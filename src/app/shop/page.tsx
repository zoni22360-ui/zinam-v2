"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice: number | null;
  mainImage: string;
  gallery: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  badge: string | null;
  status: string;
  category?: {
    name: string;
  };
  seller?: {
    shopName: string;
  };
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.shortDescription} ${product.category?.name ?? ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        background: "#F8FCF9",
        color: "#24433A",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#78B9A5",
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Shop
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#5F756D",
            marginBottom: "40px",
          }}
        >
          Premium Handmade Crochet & Digital Products
        </p>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search products..."
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #78B9A5",
            background: "#FFFFFF",
            color: "#24433A",
            marginBottom: "40px",
            boxSizing: "border-box",
          }}
        />

        {loading && (
          <p style={{ textAlign: "center", color: "#78B9A5" }}>
            Loading products...
          </p>
        )}

        {error && (
          <p style={{ textAlign: "center", color: "#ff6b6b" }}>
            {error}
          </p>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#5F756D",
            }}
          >
            No products found.
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCECE5",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "240px",
                  background: "#F1F8F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {product.mainImage ? (
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span style={{ color: "#888" }}>No Image</span>
                )}
              </div>

              <div style={{ padding: "20px" }}>
                {product.badge && (
                  <span
                    style={{
                      color: "#78B9A5",
                      fontSize: "13px",
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                <h2
                  style={{
                    margin: "8px 0",
                    color: "#24433A",
                    fontSize: "22px",
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    color: "#5F756D",
                    minHeight: "45px",
                  }}
                >
                  {product.shortDescription}
                </p>

                <p
                  style={{
                    color: "#888",
                    fontSize: "14px",
                  }}
                >
                  {product.category?.name ?? "Uncategorized"} •{" "}
                  {product.seller?.shopName ?? "Zinam Seller"}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <strong
                    style={{
                      color: "#78B9A5",
                      fontSize: "22px",
                    }}
                  >
                    PKR {product.salePrice ?? product.price}
                  </strong>

                  <span
                    style={{
                      color: product.stock > 0 ? "#7CFC98" : "#ff6b6b",
                      fontSize: "14px",
                    }}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
