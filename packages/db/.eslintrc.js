module.exports = {
  extends: ["@repo/eslint-config/base"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  root: true,
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules/**",
    "dist/**",
    "prisma/migrations/**",
    "prisma/seed.ts", // Exclude seed file as it's not in tsconfig
  ],
  rules: {
    // Database specific rules
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "off", // Allow console in seed scripts
    "no-var": "off", // Allow var for Prisma global declarations
  },
};
