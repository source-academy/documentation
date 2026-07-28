import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import tseslint from 'typescript-eslint';
import * as importPlugin from 'eslint-plugin-import';

export default defineConfig(
  {
    ignores: [
      "**/dist",
      "**/node_modules"
    ],
  },
  {
    plugins: {
      import: importPlugin,
      '@stylistic': stylistic
    },
    rules: {
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': ['warn', { 'prefer-inline': true }],
      'import/order': 'warn',

      '@stylistic/eol-last': 'warn',
      '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
      '@stylistic/no-multi-spaces': ['warn', { ignoreEOLComments: true }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'warn',
    }
  },
  {
    files: ['**/*.ts'],
    ignores: ['**/*.d.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        defaultProject: `${import.meta.dirname}/tsconfig.json`,
        allowDefaultProject: [
          './typedoc-plugin/vitest.config.ts'
        ]
      }
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/only-throw-error': 'error',
    }
  },
  {
    files: ['**/__tests__/**/*.test.ts'],
    extends: [vitest.configs.recommended],
    plugins: {
      vitest
    }
  }
)
