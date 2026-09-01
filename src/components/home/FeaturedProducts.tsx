"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  salePrice: number | null;
  mainImage: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  stock: number;
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Featured products error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section
      style={{
        background: "#FFF9F1",
        color: "#24433A",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#24433A",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Featured Products
        </h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading products...</p>
        ) : products.length === 0 ? (
          <p style={{ textAlign: "center" }}>No products available.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >
            {products.map((product) => {
              const displayPrice = product.salePrice ?? product.price;

              return (
                <article
                  key={product.id}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #78B9A5",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "240px",
                      background: "#F4EEE5",
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
                      <span>No Image</span>
                    )}
                  </div>

                  <div style={{ padding: "20px" }}>
                    {product.badge && (
                      <span
                        style={{
                          background: "#78B9A5",
                          color: "#FFFFFF",
                          padding: "5px 10px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {product.badge}
                      </span>
                    )}

                    <h3
                      style={{
                        color: "#24433A",
                        fontSize: "22px",
                        margin: "15px 0 8px",
                      }}
                    >
                      {product.name}
                    </h3>

                    <p style={{ margin: "8px 0" }}>
                      {"⭐".repeat(Math.round(product.rating))}
                    </p>

                    <p
                      style={{
                        color: "#56756B",
                        fontSize: "14px",
                      }}
                    >
                      {product.reviewCount} reviews
                    </p>

                    <strong
                      style={{
                        color: "#24433A",
                        fontSize: "22px",
                      }}
                    >
                      PKR {displayPrice.toLocaleString()}
                    </strong>

                    <p
                      style={{
                        color: product.stock > 0 ? "#56756B" : "#B85C3A",
                        fontSize: "14px",
                      }}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
