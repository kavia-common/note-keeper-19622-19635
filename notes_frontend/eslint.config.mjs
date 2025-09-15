import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      ".angular/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.config.mjs",
      "**/*.spec.ts"
    ]
  },
  // JS files with core parser
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        HTMLElement: "readonly",
        confirm: "readonly",
        process: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "off",
      "no-unreachable": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-finally": "error",
      "no-invalid-regexp": "error",
      "no-obj-calls": "error",
      "no-dupe-keys": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-func-assign": "error",
      "no-inner-declarations": "error",
      "no-irregular-whitespace": "error",
      "no-sparse-arrays": "error",
      "use-isnan": "error",
      "valid-typeof": "error"
    }
  },
  // TS files with TypeScript parser, no plugin rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: false
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        HTMLElement: "readonly",
        confirm: "readonly",
        process: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-undef": "off", // TS provides types and Angular decorators use symbols not seen by core rule
      "no-unused-vars": "off",
      "no-unreachable": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-finally": "error",
      "no-invalid-regexp": "error",
      "no-obj-calls": "error",
      "no-dupe-keys": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-func-assign": "error",
      "no-inner-declarations": "error",
      "no-irregular-whitespace": "error",
      "no-sparse-arrays": "error",
      "use-isnan": "error",
      "valid-typeof": "error"
    }
  }
];
