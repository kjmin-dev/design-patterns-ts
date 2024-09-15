import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        root: './',
        coverage: {
            provider: 'v8',
        },
    },
    plugins: [],
});
