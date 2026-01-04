import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser 
    },
    rules: {
      // Básicas y recomendadas
      "no-console": "warn",                  // Aviso si usas console.log
      "no-unused-vars": ["error", { vars: "all", args: "after-used" }], // Variables no usadas
      "eqeqeq": ["error", "always"],         // Usar === en vez de ==
      "semi": ["error", "always"],           // Requiere punto y coma
      "quotes": ["error", "single"],         // Comillas simples
      "indent": ["error", 2],                // Indentación de 2 espacios
      "prefer-const": "error",               // Usar const si no se reasigna
      "curly": ["error", "all"],             // Siempre usar llaves en if/else
      "no-var": "error",                      // Prohibir var
      "comma-dangle": ["error", "always-multiline"], // Comas al final en multilinea
      "brace-style": ["error", "1tbs"],      // Estilo de llaves consistente
    }
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },
]);
