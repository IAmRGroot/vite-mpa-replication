import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2(),
    ],
    root: '.',
    base: '/',
    resolve: { alias: { '@': resolve(__dirname, './src') } },
    server: { host: '0.0.0.0', port: 3020 },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './index.html'),
                test1: resolve(__dirname, './test1/index.html'),
            },
        },
    },
});
