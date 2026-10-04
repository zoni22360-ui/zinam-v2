import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SESSION_COOKIE = "zinam-cart-session";
const SHIPPING_FEE = 0;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const customerName = String(body.customerName ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const address = String(body.address ?? "").trim();
    const city = String(body.city ?? "").trim();

    if (!customerName || !phone || !address || !city) {
      return NextResponse.json(
        { error: "All customer details are required." },
        { status: 400 }
      );
    }

    const sessionId = request.cookies.get(SESSION_COOKIE)?.value;

    if (!sessionId) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { sessionId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    for (const item of cart.items) {
      if (item.product.stock < item.quantity) {
        return NextResponse.json(
          {
            error: `Not enough stock for ${item.product.name}.`,
          },
          { status: 400 }
        );
      }
    }

    const subtotal = cart.items.reduce(
      (sum, item) => sum + (item.product.salePrice ?? item.product.price) * item.quantity,
      0
    );

    const total = subtotal + SHIPPING_FEE;
    const orderNumber = `ZIN-${Date.now()}`;

    const order = await prisma.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({
        data: {
          orderNumber,
          customerName,
          phone,
          address,
          city,
          paymentMethod: "COD",
          status: "PENDING",
          subtotal,
          shippingFee: SHIPPING_FEE,
          total,
          items: {
            create: cart.items.map((item) => ({
              productName: item.product.name,
              unitPrice: item.product.salePrice ?? item.product.price,
              quantity: item.quantity,
              productId: item.product.id,
            })),
          },
        },
        include: {
          items: true,
        },
      });

      for (const item of cart.items) {
        await tx.product.update({
          where: { id: item.product.id },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });
      }

      await tx.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      return createdOrder;
    });

    return NextResponse.json(
      {
        success: true,
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      { error: "Unable to create order." },
      { status: 500 }
    );
  }
}
