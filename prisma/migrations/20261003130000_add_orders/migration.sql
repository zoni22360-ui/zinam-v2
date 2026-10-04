CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED');

CREATE TYPE "PaymentMethod" AS ENUM ('COD');

CREATE TABLE "Order" (
  "id" TEXT NOT NULL,
  "orderNumber" TEXT NOT NULL,
  "customerName" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'COD',
  "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
  "subtotal" DOUBLE PRECISION NOT NULL,
  "shippingFee" DOUBLE PRECISION NOT NULL,
  "total" DOUBLE PRECISION NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

CREATE TABLE "OrderItem" (
  "id" TEXT NOT NULL,
  "productName" TEXT NOT NULL,
  "unitPrice" DOUBLE PRECISION NOT NULL,
  "quantity" INTEGER NOT NULL,
  "orderId" TEXT NOT NULL,
  "productId" TEXT,

  CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "OrderItem"
ADD CONSTRAINT "OrderItem_orderId_fkey"
FOREIGN KEY ("orderId") REFERENCES "Order"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "OrderItem"
ADD CONSTRAINT "OrderItem_productId_fkey"
FOREIGN KEY ("productId") REFERENCES "Product"("id")
ON DELETE SET NULL ON UPDATE CASCADE;
