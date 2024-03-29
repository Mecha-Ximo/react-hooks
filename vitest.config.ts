import { configDefaults, defineConfig } from 'vitest/dist/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'src/tests/integration'],
  },
});
