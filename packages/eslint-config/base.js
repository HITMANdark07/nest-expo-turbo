module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint", "only-warn"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist/**"],
};
