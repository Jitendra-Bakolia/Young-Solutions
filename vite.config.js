import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'CONFIG_')

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          "name": "Fusion 24x7",
          "short_name": "fusion",
          "icons": [
            {
              "src": "/pwa-192x192.png",
              "sizes": "192x192",
              "type": "image/png",
              "purpose": "any"
            },
            {
              "src": "/pwa-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "any"
            },
            {
              "src": "/pwa-maskable-192x192.png",
              "sizes": "192x192",
              "type": "image/png",
              "purpose": "maskable"
            },
            {
              "src": "/pwa-maskable-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "maskable"
            }
          ],
          "start_url": "/",
          "display": "standalone",
          "background_color": "#FFFFFF",
          "theme_color": "#FFFFFF",
          "description": "Manage Your Time Efficiently."
        },
      }),
    ],
    resolve: {
      base: '/',
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    envPrefix: 'APP_',
    server: {
      port: env.CONFIG_SERVER_PORT,
      open: env.CONFIG_SERVER_OPEN,
      proxy: {
        '/api': {
          target: env.CONFIG_SERVER_PROXY
        }
      },
      strictPort: true,
    },
    build: {
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true,
          passes: 2
        },
        mangle: true,
        output: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: `assets/[hash:8]-${Date.now()}.js`,
          chunkFileNames: `assets/[hash:8].js`,
          assetFileNames: `assets/[hash:8].[ext]`,
        }
      }
    }
  }
})
