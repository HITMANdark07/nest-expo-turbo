module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "only-warn"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  env: {
    es2022: true,
    node: true,
  },
  ignorePatterns: [
    "dist/**",
    "build/**",
    "coverage/**",
    "node_modules/**",
    ".next/**",
    ".expo/**",
    "*.config.js",
    "*.config.mjs",
  ],
  rules: {
    // TypeScript specific rules
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",

    // General rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-const": "warn",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
  },
};
