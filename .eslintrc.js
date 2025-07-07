module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "wdio"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-const": "error",
    "no-var": "error"
  }
}; 