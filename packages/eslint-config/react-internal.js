module.exports = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
