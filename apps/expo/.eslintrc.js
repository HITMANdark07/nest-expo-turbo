module.exports = {
  extends: [
    "@repo/eslint-config/base",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-native", "react-hooks"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  root: true,
  env: {
    node: true,
    "react-native/react-native": true,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "metro.config.js",
    "babel.config.js",
    "tailwind.config.js",
    "postcss.config.js",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in newer React versions
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
  },
};
