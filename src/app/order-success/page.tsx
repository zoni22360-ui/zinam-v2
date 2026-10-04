"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order");

  return (
    <main className="min-h-screen bg-[#FFF9F1] px-4 py-16">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#78B9A5]/20 text-4xl">
          ✓
        </div>

        <p className="mt-6 text-sm font-medium tracking-widest text-[#78B9A5]">
          ZINAM MARKETPLACE
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#24433A]">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-[#24433A]/70">
          Thank you for shopping with Zinam. Your order has been received.
        </p>

        {orderNumber && (
          <div className="mt-6 rounded-2xl bg-[#FFF9F1] p-4">
            <p className="text-sm text-[#24433A]/60">Order Number</p>
            <p className="mt-1 text-lg font-bold text-[#24433A]">
              {orderNumber}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-[#24433A]/70">
          Payment Method: <strong>Cash on Delivery</strong>
        </p>

        <a
          href="/shop"
          className="mt-8 inline-block rounded-xl bg-[#24433A] px-6 py-3 font-bold text-white"
        >
          Continue Shopping
        </a>
      </div>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#FFF9F1] p-10 text-center text-[#24433A]">
          Loading...
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
