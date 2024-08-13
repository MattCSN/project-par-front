import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  root: __dirname,
  cacheDir: "./node_modules/.vite/Handball-Manager",
  server: {
    port: 4200,
    host: true,
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: `JOKA`,
        short_name: `JOKA`,
        description: `French golf information browser developed by Rick & Morty`,
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: `#ffffff`,
        background_color: `#ffffff`,
        start_url: `./?source=pwa`,
        display: `standalone`,
      },
    }),
  ],
});