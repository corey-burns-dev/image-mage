import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import betterTailwind from "eslint-plugin-better-tailwindcss";
import tailwindCanonical from "eslint-plugin-tailwind-canonical-classes";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  betterTailwind.configs["stylistic"],
  {
    settings: {
      "better-tailwindcss": {
        entryPoint: "./app/globals.css",
      },
    },
    plugins: {
      "tailwind-canonical-classes": tailwindCanonical,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-class-order": "off",
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unnecessary-whitespace": "off",
      "tailwind-canonical-classes/tailwind-canonical-classes": [
        "warn",
        { cssPath: "./app/globals.css" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".open-next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
