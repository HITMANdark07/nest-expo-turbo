import { PrismaClient, ContentType, FAQ } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables from the root directory
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const prisma = new PrismaClient();

async function main() {
  // write some here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
