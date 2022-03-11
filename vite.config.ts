import { BuildOptions, defineConfig, UserConfigExport } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default (): UserConfigExport => {
    const plugins = [
        vue2(),
    ];
    
    const build_options = {
        rollupOptions: {
            input: [
                resolve(__dirname, './index.html'),
                resolve(__dirname, './test1/index.html'),
            ],
        },
    } as BuildOptions;

    return defineConfig({
        plugins: plugins,
        root: '.',
        base: '/',
        resolve: { alias: { '@': resolve(__dirname, '.') } },
        server: { host: '0.0.0.0', port: 3020 },
        build: build_options,
    });
};
