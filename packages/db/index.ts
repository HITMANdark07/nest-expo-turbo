import { PrismaClient } from "@prisma/client";
import { applyExtensions } from "./extensions";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
  var extendedPrisma: ReturnType<typeof applyExtensions> | undefined;
}

// Base Prisma client
const prismaClient =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Create the extended client with all extensions
export const prisma = global.extendedPrisma || applyExtensions(prismaClient);

export * from "@prisma/client";

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaClient;
  global.extendedPrisma = prisma;
}
