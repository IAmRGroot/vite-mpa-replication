import { defineConfig, UserConfigExport } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { VitePWA } from 'vite-plugin-pwa';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';


// https://vitejs.dev/config/
export default (): UserConfigExport => {
    const plugins = [
        vue2(),
        VitePWA({
            manifest: {
                start_url: '/',
                scope: '/',
                name: 'Test',
                short_name: 'Test',
                description: 'Test',
                icons: [{
                    src: '/logo.png',
                    sizes: '200x200',
                    type: 'image/png',
                    purpose: 'any',
                }],
            },
        }),
        del({
            targets: 'src/out/*',
            hook: 'buildEnd',
        }),
        copy({
            targets: [
                {
                    src: 'src/dist/*',
                    dest: 'src/out',
                },
            ],
            overwrite: true,
            hook: 'writeBundle',
            preserveTimestamps: true,
        }),
    ];

    return defineConfig({
        plugins: plugins,
        root: 'src',
        base: '/',
        server: { host: '0.0.0.0' },
    });
};
