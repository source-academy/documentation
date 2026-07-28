import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: import.meta.dirname,
    clearMocks: true,
    environment: 'node',
    name: 'Typedoc Plugin',
    include: ['**/__tests__/**/*.test.ts']
  }
});
