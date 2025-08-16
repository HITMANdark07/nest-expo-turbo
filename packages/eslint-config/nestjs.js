module.exports = {
  extends: [
    "./base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    node: true,
    jest: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js", "nest-cli.json", "test/**/*.e2e-spec.ts"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // NestJS specific rules
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // Decorator rules
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
