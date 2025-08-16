import { Prisma, PrismaClient } from "@prisma/client";

/**
 * User model extension
 * Handles user creation and role update events
 */
export const userExtension = (prisma: PrismaClient) => {
  return Prisma.defineExtension({
    name: "UserExtension",
    query: {
      user: {
        async create({ args, query }) {
          // Execute the original query
        },

        async update({ args, query }) {
          // write update query
        },
      },
    },
  });
};
