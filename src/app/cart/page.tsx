"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    salePrice: number | null;
    mainImage: string;
    stock: number;
  };
};

type Cart = {
  id: string | null;
  sessionId: string;
  items: CartItem[];
};

export default function CartPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);

  async function loadCart() {
    try {
      setError("");

      let sessionId = localStorage.getItem("zinam-cart-session");

      if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("zinam-cart-session", sessionId);
      }

      const response = await fetch(
        "/api/cart?sessionId=" + encodeURIComponent(sessionId)
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load cart");
      }

      setCart(data);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Unable to load cart."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  async function updateQuantity(itemId: string, quantity: number) {
    if (!cart || quantity < 1) return;

    const item = cart.items.find((item) => item.id === itemId);

    if (!item || quantity > item.product.stock) {
      return;
    }

    try {
      setUpdating(itemId);

      const response = await fetch("/api/cart", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: cart.sessionId,
          itemId,
          quantity,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update quantity");
      }

      setCart((current) =>
        current
          ? {
              ...current,
              items: current.items.map((cartItem) =>
                cartItem.id === itemId
                  ? {
                      ...cartItem,
                      quantity: data.item.quantity,
                    }
                  : cartItem
              ),
            }
          : current
      );
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Unable to update quantity."
      );
    } finally {
      setUpdating(null);
    }
  }

  async function removeItem(itemId: string) {
    if (!cart) return;

    try {
      setUpdating(itemId);

      const response = await fetch(
        "/api/cart?sessionId=" +
          encodeURIComponent(cart.sessionId) +
          "&itemId=" +
          encodeURIComponent(itemId),
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to remove item");
      }

      setCart((current) =>
        current
          ? {
              ...current,
              items: current.items.filter(
                (cartItem) => cartItem.id !== itemId
              ),
            }
          : current
      );
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Unable to remove item."
      );
    } finally {
      setUpdating(null);
    }
  }

  const subtotal =
    cart?.items.reduce((total, item) => {
      const price = item.product.salePrice ?? item.product.price;
      return total + price * item.quantity;
    }, 0) ?? 0;

  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FFF9F1] px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[#6B5147]">
            Loading cart...
          </p>
        </div>
      </main>
    );
  }

  if (error && !cart) {
    return (
      <main className="min-h-screen bg-[#FFF9F1] px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F1] px-5 py-12 text-[#3B2923]">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Your Cart
        </h1>

        <p className="mt-2 text-[#6B5147]">
          Review your handmade finds before checkout.
        </p>

        {error && (
          <div className="mt-5 rounded-2xl bg-white p-4 text-red-600 shadow-sm">
            {error}
          </div>
        )}

        {!cart?.items?.length ? (
          <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-4 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-[#6B5147]">
              Add something beautiful from Zinam.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <section className="space-y-4">
              {cart.items.map((item) => {
                const price =
                  item.product.salePrice ?? item.product.price;

                const itemTotal = price * item.quantity;

                return (
                  <article
                    key={item.id}
                    className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                  >
                    <div className="h-28 w-full overflow-hidden rounded-2xl bg-[#F2DED2] sm:h-28 sm:w-28 sm:shrink-0">
                      {item.product.mainImage ? (
                        <img
                          src={item.product.mainImage}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#8A6254]">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold">
                        {item.product.name}
                      </h2>

                      <p className="mt-1 text-[#6B5147]">
                        PKR {price.toLocaleString()} each
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <div className="flex items-center overflow-hidden rounded-xl border border-[#D8C9C1]">
                          <button
                            type="button"
                            onClick={() => {
                              if (item.quantity === 1) {
                                removeItem(item.id);
                              } else {
                                updateQuantity(item.id, item.quantity - 1);
                              }
                            }}
                            disabled={updating === item.id}
                            className="px-4 py-2 text-lg font-bold disabled:opacity-40"
                          >
                            −
                          </button>
                          <span className="min-w-10 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                            disabled={
                              updating === item.id ||
                              item.quantity >= item.product.stock
                            }
                            className="px-4 py-2 text-lg font-bold disabled:opacity-40"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          disabled={updating === item.id}
                          className="text-sm font-semibold text-[#B85C3A] hover:underline disabled:opacity-40"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-lg font-bold text-[#B85C3A]">
                        PKR {itemTotal.toLocaleString()}
                      </p>

                      <p className="mt-1 text-sm text-[#6B5147]">
                        {item.product.stock} available
                      </p>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-[#6B5147]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    PKR {subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    PKR {shipping.toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-[#E8DDD7] pt-4">
                  <div className="flex justify-between text-lg font-bold text-[#3B2923]">
                    <span>Total</span>
                    <span className="text-[#B85C3A]">
                      PKR {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => router.push("/checkout")}
                className="mt-6 w-full rounded-xl bg-[#24433A] px-5 py-3 font-bold text-white"
              >
                Proceed to Checkout
              </button>

              <p className="mt-3 text-center text-xs text-[#8A6254]">
                Secure checkout • Cash on Delivery
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
