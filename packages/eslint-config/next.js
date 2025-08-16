module.exports = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "@next/next"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", // TypeScript handles this
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@next/next/no-html-link-for-pages": "off",
  },
};
