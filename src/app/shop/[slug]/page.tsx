"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    async function loadProduct() {
      try {
        const response = await fetch(`/api/products/${slug}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [slug]);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#FFF9F1",
          color: "#24433A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading product...
      </main>
    );
  }

  if (error || !product) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#FFF9F1",
          color: "#24433A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Product not found.
      </main>
    );
  }

  const price = product.salePrice ?? product.price;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF9F1",
        color: "#24433A",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              height: "450px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#F4EEE5",
            }}
          >
            <img
              src={product.mainImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {product.gallery?.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
                overflowX: "auto",
              }}
            >
              {product.gallery.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          {product.badge && (
            <span
              style={{
                background: "#78B9A5",
                color: "#FFFFFF",
                padding: "7px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {product.badge}
            </span>
          )}

          <h1
            style={{
              fontSize: "42px",
              margin: "18px 0 10px",
              color: "#24433A",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#56756B",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            {product.shortDescription}
          </p>

          <div style={{ margin: "20px 0" }}>
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>
              PKR {price.toLocaleString()}
            </span>

            {product.salePrice !== null && (
              <span
                style={{
                  marginLeft: "12px",
                  textDecoration: "line-through",
                  color: "#8A9C95",
                }}
              >
                PKR {product.price.toLocaleString()}
              </span>
            )}
          </div>

          <p style={{ color: "#56756B" }}>
            {"⭐".repeat(Math.round(product.rating))}{" "}
            <span>
              ({product.reviewCount} reviews)
            </span>
          </p>

          <p
            style={{
              color: product.stock > 0 ? "#56756B" : "#B85C3A",
              fontWeight: "bold",
            }}
          >
            {product.stock > 0
              ? `${product.stock} items available`
              : "Out of stock"}
          </p>

          <div
            style={{
              borderTop: "1px solid #DCECE5",
              marginTop: "25px",
              paddingTop: "25px",
            }}
          >
            <p
              style={{
                color: "#56756B",
                lineHeight: 1.8,
              }}
            >
              {product.description}
            </p>

            <p style={{ color: "#56756B" }}>
              Category:{" "}
              <strong style={{ color: "#24433A" }}>
                {product.category?.name ?? "Uncategorized"}
              </strong>
            </p>

            <p style={{ color: "#56756B" }}>
              Seller:{" "}
              <strong style={{ color: "#24433A" }}>
                {product.seller?.shopName ?? "Zinam Seller"}
              </strong>
            </p>
          </div>

          <button
            disabled={product.stock <= 0}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              background: product.stock > 0 ? "#24433A" : "#B8C5C0",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: product.stock > 0 ? "pointer" : "not-allowed",
            }}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </main>
  );
}
