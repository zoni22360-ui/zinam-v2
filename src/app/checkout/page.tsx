"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => {
        if (!data.items?.length) {
          router.replace("/cart");
          return;
        }

        setItems(data.items);
      })
      .catch(() => {
        setError("Unable to load your cart.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  const subtotal = items.reduce((sum, item) => {
    const price = item.product.salePrice ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);  async function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !address.trim() || !city.trim()) {
      setError("Please fill all delivery details.");
      return;
    }

    try {
      setPlacing(true);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: name,
          phone,
          address,
          city,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to place order.");
      }

      router.push(
        "/order-success?order=" +
          encodeURIComponent(data.order.orderNumber)
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to place order."
      );
    } finally {
      setPlacing(false);
    }
  }
  if (loading) {
    return (
      <main className="min-h-screen bg-[#FFF9F1] p-10 text-center text-[#24433A]">
        Loading checkout...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F1] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-medium tracking-wide text-[#78B9A5]">
            ZINAM MARKETPLACE
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#24433A]">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-[#24433A]/70">
            Complete your delivery details.
          </p>
        </div>

        <form
          onSubmit={placeOrder}
          className="grid gap-6 lg:grid-cols-[1fr_380px]"
        >
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#24433A]">
              Delivery Details
            </h2>

            <div className="mt-5 grid gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="rounded-xl border p-3"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                type="tel"
                className="rounded-xl border p-3"
              />

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Full Delivery Address"
                rows={4}
                className="rounded-xl border p-3"
              />

              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="rounded-xl border p-3"
              />
            </div>
            <div className="mt-5 rounded-xl bg-[#78B9A5]/10 p-4 text-[#24433A]">
              <p className="font-semibold">Payment Method</p>
              <p className="text-sm">Cash on Delivery</p>
            </div>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </p>
            )}
          </section>

          <aside className="h-fit rounded-2xl bg-[#24433A] p-6 text-white">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-5 space-y-3">
              {items.map((item) => {
                const price =
                  item.product.salePrice ?? item.product.price;

                return (
                  <div
                    key={item.id}
                    className="flex justify-between border-b border-white/10 pb-3"
                  >
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>

                    <span>
                      PKR {(price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex justify-between border-t border-white/15 pt-4 text-lg font-bold">
              <span>Total</span>
              <span>PKR {subtotal.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              disabled={placing}
              className="mt-6 w-full rounded-xl bg-[#78B9A5] p-3 font-semibold text-[#24433A] disabled:opacity-60"
            >
              {placing ? "Placing Order..." : "Place Order"}
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
}