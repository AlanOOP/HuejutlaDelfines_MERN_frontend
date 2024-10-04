import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Huejutla Delfines',
        short_name: 'HF',
        icons: [
          {
            "src": "/logo-club-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "/logo-club-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/logo-club.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#86A286"
      }
    })
  ],
  // Opciones del servidor o preview si las necesitas
  // preview: {
  //   port: 8080,
  //   strictPort: true,
  // },
  // server: {
  //   port: 8080,
  //   strictPort: true,
  //   host: true,
  //   origin: "http://0.0.0.0:8080",
  // },
});
