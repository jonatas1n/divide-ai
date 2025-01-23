import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          style: ['@mui']
        },
      },
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  base: '/divide-ai/',
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
        type: 'module',
      },
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: [
          "**/*",
      ],
      manifest: {
        name: 'divide-ai',
        short_name: 'DivideAí',
        description: 'Uma aplicação para dividir contas de bares e restaurantes',
        theme_color: '#0e4d1f',
        scope: "/divide-ai/",
        start_url: "/divide-ai/?fullscreen=true",
        display: "standalone",
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})