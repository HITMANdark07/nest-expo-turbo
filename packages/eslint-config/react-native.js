module.exports = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-native", "react-hooks", "simple-import-sort"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  env: {
    "react-native/react-native": true,
    es2022: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    ".eslintrc.js",
    "metro.config.js",
    "babel.config.js",
    "tailwind.config.js",
    "postcss.config.js",
    "expo-env.d.ts",
  ],
  rules: {
    "@typescript-eslint/no-require-imports": "off",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", // TypeScript handles this
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-boolean-value": ["error", "never"],
    "react/self-closing-comp": "error",

    // React Native specific rules
    "react-native/no-unused-styles": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/split-platform-components": "off",
    "react-native/no-raw-text": "off",

    // Performance
    "react-native/no-single-element-style-arrays": "warn",

    // Imports
    "no-duplicate-imports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^react", "^react-native", "@react", "expo", "^@?\\w"],
          [
            '^("|@/components|@/consts|@/contexts|@/hooks|@/lib|@/pages|@/styles|@/store|@/types|@/utils|")(/.*|$)',
          ],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        ],
      },
    ],
  },
};
