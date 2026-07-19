// @ts-check

import { defineConfig } from "cspell";

export default defineConfig({
  version: "0.2",
  language: "en",
  files: [
    "app/**/*.{md,mdx,json,jsonc}",
    "README.md",
    "plans/**/*.md",
    "archive/**/*.md",
  ],
  ignorePaths: [
    "node_modules",
    "dist",
    ".vitepress/cache",
    ".vitepress/dist",
    ".yarn",
    "yarn.lock",
    "package.json",
  ],
  dictionaries: ["softwareTerms", "companies", "misc", "filetypes"],
  words: [
    "autograder",
    "autograding",
    "Centralised",
    "coverimage",
    "exectime",
    "flipvert",
    "GRADERDEPLOYMENT",
    "markdownlint",
    "maxxp",
    "minimise",
    "postdeclared",
    "postpend",
    "POSTPEND",
    "practise",
    "predeclared",
    "rcross",
    "serverside",
    "showsolution",
    "sidequest",
    "SICP",
    "SIGCSE",
    "sourceacademy",
    "sourcereel",
    "utilise",
    "vitepress",
    "WEBSUMMARY",
  ],
  patterns: [
    {
      name: "course-codes",
      pattern: "/\\bCS\\d{4}[A-Z]?\\b/g",
    },
  ],
});
