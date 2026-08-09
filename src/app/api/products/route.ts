import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        seller: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error:", error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        shortDescription: body.shortDescription,
        description: body.description,
        price: Number(body.price),
        salePrice:
          body.salePrice !== undefined && body.salePrice !== null
            ? Number(body.salePrice)
            : null,
        mainImage: body.mainImage,
        gallery: Array.isArray(body.gallery) ? body.gallery : [],
        stock: Number(body.stock ?? 0),
        rating: Number(body.rating ?? 5),
        reviewCount: Number(body.reviewCount ?? 0),
        badge: body.badge ?? null,
        status: body.status ?? "IN_STOCK",
        categoryId: body.categoryId,
        sellerId: body.sellerId,
      },
      include: {
        category: true,
        seller: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/products error:", error);

    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
