import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const sessionId = new URL(req.url).searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId is required" },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { sessionId },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
                seller: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      cart ?? {
        id: null,
        sessionId,
        items: [],
      }
    );
  } catch (error) {
    console.error("GET /api/cart error:", error);

    return NextResponse.json(
      { error: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const sessionId = String(body.sessionId ?? "").trim();
    const productId = String(body.productId ?? "").trim();
    const quantity = Number(body.quantity ?? 1);

    if (!sessionId || !productId) {
      return NextResponse.json(
        { error: "sessionId and productId are required" },
        { status: 400 }
      );
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      return NextResponse.json(
        { error: "quantity must be a positive integer" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    if (product.stock < quantity) {
      return NextResponse.json(
        { error: "Not enough stock" },
        { status: 400 }
      );
    }

    const cart = await prisma.cart.upsert({
      where: { sessionId },
      create: { sessionId },
      update: {},
    });

    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    const newQuantity = (existingItem?.quantity ?? 0) + quantity;

    if (product.stock < newQuantity) {
      return NextResponse.json(
        { error: "Not enough stock" },
        { status: 400 }
      );
    }

    const item = await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      create: {
        cartId: cart.id,
        productId,
        quantity,
      },
      update: {
        quantity: newQuantity,
      },
      include: {
        product: true,
      },
    });

    return NextResponse.json(
      { success: true, item },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/cart error:", error);

    return NextResponse.json(
      { error: "Failed to add product to cart" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const sessionId = String(body.sessionId ?? "").trim();
    const itemId = String(body.itemId ?? "").trim();
    const quantity = Number(body.quantity);

    if (!sessionId || !itemId) {
      return NextResponse.json(
        { error: "sessionId and itemId are required" },
        { status: 400 }
      );
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      return NextResponse.json(
        { error: "quantity must be a positive integer" },
        { status: 400 }
      );
    }

    const item = await prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          sessionId,
        },
      },
      include: {
        product: true,
      },
    });

    if (!item) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 }
      );
    }

    if (item.product.stock < quantity) {
      return NextResponse.json(
        { error: "Not enough stock" },
        { status: 400 }
      );
    }

    const updatedItem = await prisma.cartItem.update({
      where: {
        id: itemId,
      },
      data: {
        quantity,
      },
      include: {
        product: true,
      },
    });

    return NextResponse.json({
      success: true,
      item: updatedItem,
    });
  } catch (error) {
    console.error("PATCH /api/cart error:", error);

    return NextResponse.json(
      { error: "Failed to update cart item" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const sessionId = new URL(req.url).searchParams.get("sessionId");
    const itemId = new URL(req.url).searchParams.get("itemId");

    if (!sessionId || !itemId) {
      return NextResponse.json(
        { error: "sessionId and itemId are required" },
        { status: 400 }
      );
    }

    const item = await prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          sessionId,
        },
      },
    });

    if (!item) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({
      where: {
        id: itemId,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("DELETE /api/cart error:", error);

    return NextResponse.json(
      { error: "Failed to remove cart item" },
      { status: 500 }
    );
  }
}
