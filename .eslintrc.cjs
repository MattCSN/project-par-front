module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs"],
    "import/ignore": [".(scss|less|css|svg)$"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/cache": {
      lifetime: "Infinity",
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
    vitest: {
      typecheck: true,
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "jest-extended.d.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    //**/*.tsx
    {
      files: ["**/*.tsx"],
      plugins: ["@tanstack/query", "jsx-a11y", "react", "check-file"],
      extends: [
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      rules: {
        // eslint-check-file
        "check-file/filename-naming-convention": [
          "error",
          {
            "src/**/!({index,use,main,custom-render})*.tsx": "PASCAL_CASE",
            "src/**/*.module.scss": "PASCAL_CASE",
          },
          { ignoreMiddleExtensions: true },
        ],
        "check-file/folder-naming-convention": [
          "error",
          {
            "src/!(__*__)**/": "CAMEL_CASE",
          },
        ],

        // eslint-plugin-import
        "import/extensions": [
          "error",
          "never",
          {
            json: "always",
            ts: "ignorePackages",
          },
        ],
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
            groups: [
              "builtin",
              "external",
              "internal",
              "unknown",
              "parent",
              "sibling",
              "index",
              "object",
              "type",
            ],
            "newlines-between": "always",
            pathGroups: [
              {
                pattern: "react",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "**/*.scss",
                group: "type",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
          },
        ],
        "import/prefer-default-export": "off",
        "import/no-cycle": "error",
      },
    },
    // **/*.ts, **/*.tsx
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint", "import", "prettier"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
      ],
      rules: {
        "require-await": "off",
        /* @typescript-eslint rules */
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn", // We have a lot of code to fix before enabling this rule
        "@typescript-eslint/explicit-member-accessibility": [
          "warn",
          {
            accessibility: "explicit",
            overrides: {
              accessors: "explicit",
              constructors: "explicit",
              methods: "explicit",
              properties: "explicit",
              parameterProperties: "explicit",
            },
            ignoredMethodNames: [],
          },
        ],
        "@typescript-eslint/padding-line-between-statements": [
          "warn",
          // No blank lines between variable or constant declarations
          {
            blankLine: "any",
            prev: ["let", "var", "const"],
            next: ["let", "var", "const"],
          },
          // Require blank lines between variable or constant declarations and blocks
          {
            blankLine: "always",
            prev: ["let", "var", "const"],
            next: ["block", "block-like"],
          },
          // Require blank lines between anything and these statements
          {
            blankLine: "always",
            prev: ["*"],
            next: [
              "type",
              "interface",
              "class",
              "function",
              "if",
              "switch",
              "break",
              "do",
              "while",
              "for",
              "export",
              "try",
              "throw",
              "return",
            ],
          },
          // Require blank lines between blocks and anything
          {
            blankLine: "always",
            prev: ["block", "block-like"],
            next: ["*"],
          },
          {
            blankLine: "any",
            prev: ["export"],
            next: ["export"],
          },
        ],
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/consistent-type-definitions": ["warn", "type"],

        /* ESLint rules */
        curly: "error",
        "no-console": "error",
        "no-unused-expressions": "error",
        "no-unneeded-ternary": "error",
        "lines-between-class-members": [
          "error",
          "always",
          {
            exceptAfterSingleLine: true,
          },
        ],
        "no-multiple-empty-lines": [
          "error",
          {
            max: 1,
          },
        ],

        /* eslint-plugin-import rules */
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
            pathGroups: [
              {
                pattern: "react",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "@react/**",
                group: "external",
                position: "before",
              },
            ],
            groups: [
              "builtin",
              "external",
              "internal",
              "unknown",
              "parent",
              "sibling",
              "index",
              "object",
              "type",
            ],
            "newlines-between": "always",
          },
        ],

        /* TypeScript rules (turn off ESLint equivalents) */
        "no-unused-vars": "error",
        "no-shadow": "off",

        /* prettier rules*/
        "prettier/prettier": "error",
      },
    },
    // **/*.test.ts, **/*.test.tsx
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      plugins: [
        "vitest",
        "jest-formatting",
        "testing-library",
        "jest-extended",
        "jest-dom",
      ],
      extends: [
        "plugin:vitest/legacy-recommended",
        "plugin:jest-formatting/recommended",
        "plugin:jest-extended/all",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "vitest/expect-expect": "error",
      },
    },
  ],
};
