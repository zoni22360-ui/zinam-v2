import { NextResponse } from "next/server";

let products: any[] = [];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date(),
  };

  products.push(product);

  return NextResponse.json({
    success: true,
    product,
  });
}
