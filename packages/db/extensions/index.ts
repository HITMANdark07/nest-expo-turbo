import { PrismaClient } from "@prisma/client";
import { userExtension } from "./user.extension";

/**
 * Apply all Prisma extensions
 * @param prisma The Prisma client instance
 * @returns Extended Prisma client with all extensions applied
 */
export const applyExtensions = (prisma: PrismaClient) => {
  // Apply the user extension
  return prisma.$extends(userExtension(prisma));

  // To add more extensions in the future:
  // 1. First create and import the extension (like userExtension)
  // 2. Modify this function to apply multiple extensions in sequence, like:
  //    const withUserExtension = prisma.$extends(userExtension(prisma));
  //    const withBothExtensions = withUserExtension.$extends(otherExtension(prisma));
  //    return withBothExtensions;
};
