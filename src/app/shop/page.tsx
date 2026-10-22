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
  const [adding, setAdding] = useState<string | null>(null);
  const [addMessage, setAddMessage] = useState("");

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

  async function addToCart(productId: string) {
    try {
      setAdding(productId);
      setAddMessage("");

      let sessionId = localStorage.getItem("zinam-cart-session");

      if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("zinam-cart-session", sessionId);
      }

      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          productId,
          quantity: 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to add product to cart");
      }

      setAddMessage("Product added to cart successfully.");

      window.dispatchEvent(new Event("zinam-cart-updated"));
    } catch (err) {
      console.error("Add to cart error:", err);

      setAddMessage(
        err instanceof Error
          ? err.message
          : "Unable to add product to cart."
      );
    } finally {
      setAdding(null);
    }
  }

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.shortDescription} ${
      product.category?.name ?? ""
    }`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        background: "#FFF7ED",
        color: "#3B2923",
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
            color: "#B85C3A",
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
            color: "#8A6254",
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
            border: "1px solid #B85C3A",
            background: "#FFFFFF",
            color: "#3B2923",
            marginBottom: "40px",
            boxSizing: "border-box",
          }}
        />

        {loading && (
          <p style={{ textAlign: "center", color: "#B85C3A" }}>
            Loading products...
          </p>
        )}

        {error && (
          <p style={{ textAlign: "center", color: "#ff6b6b" }}>
            {error}
          </p>
        )}

        {addMessage && !loading && !error && (
          <p
            style={{
              textAlign: "center",
              color: "#24433A",
              marginBottom: "20px",
              fontWeight: 600,
            }}
          >
            {addMessage}
          </p>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#8A6254",
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
                  background: "#F2DED2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href={`/shop/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
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
                    <span style={{ color: "#8A6254" }}>No Image</span>
                  )}
                </a>
              </div>

              <div style={{ padding: "20px" }}>
                {product.badge && (
                  <span
                    style={{
                      color: "#B85C3A",
                      fontSize: "13px",
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                <h2
                  style={{
                    margin: "8px 0",
                    color: "#3B2923",
                    fontSize: "22px",
                  }}
                >
                  <a
                    href={`/shop/${product.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {product.name}
                  </a>
                </h2>

                <p
                  style={{
                    color: "#8A6254",
                    minHeight: "45px",
                  }}
                >
                  {product.shortDescription}
                </p>

                <p
                  style={{
                    color: "#8A6254",
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
                      color: "#B85C3A",
                      fontSize: "22px",
                    }}
                  >
                    PKR {product.salePrice ?? product.price}
                  </strong>

                  <span
                    style={{
                      color:
                        product.stock > 0 ? "#5C7A63" : "#ff6b6b",
                      fontSize: "14px",
                    }}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>

                <a href={`/shop/${product.slug}`} style={{ display: "block", marginTop: "12px", padding: "13px 16px", border: "1px solid #24433A", borderRadius: "12px", background: "#FFFFFF", color: "#24433A", fontWeight: 700, textAlign: "center", textDecoration: "none" }}>View Product</a>

                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  disabled={
                    adding === product.id || product.stock <= 0
                  }
                  style={{
                    width: "100%",
                    marginTop: "18px",
                    padding: "13px 16px",
                    border: "none",
                    borderRadius: "12px",
                    background:
                      product.stock > 0 ? "#24433A" : "#C8C8C8",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    cursor:
                      product.stock > 0 ? "pointer" : "not-allowed",
                    opacity: adding === product.id ? 0.65 : 1,
                  }}
                >
                  {adding === product.id
                    ? "Adding..."
                    : product.stock > 0
                    ? "🛒 Add to Cart"
                    : "Out of Stock"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
