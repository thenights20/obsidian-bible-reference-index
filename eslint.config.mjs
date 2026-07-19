import tsparser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import obsidianmd from "eslint-plugin-obsidianmd";

export default defineConfig([
  ...obsidianmd.configs.recommended,
  {
    files: ["src/**/*.ts", "tests/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: { project: "./tsconfig.json" }
    },
    rules: {
      "obsidianmd/ui/sentence-case": "off",
      "obsidianmd/settings-tab/prefer-setting-definitions": "off"
    }
  },
  {
    files: ["tests/**/*.ts"],
    rules: {
      "obsidianmd/no-tfile-tfolder-cast": "off",
      "obsidianmd/prefer-window-timers": "off"
    }
  }
]);
