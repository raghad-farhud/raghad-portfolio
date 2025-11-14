import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

// Plugin to handle malformed URI errors
const handleMalformedUriPlugin = (): Plugin => {
  return {
    name: "handle-malformed-uri",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        try {
          // Try to decode the URL using decodeURI (same as Vite does)
          // to catch malformed URIs early
          if (req.url) {
            decodeURI(req.url);
          }
          next();
        } catch (error) {
          // If URI is malformed, return 400 Bad Request instead of crashing
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/plain");
          res.end("Bad Request: Malformed URI");
        }
      });
    },
  };
};

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  handleMalformedUriPlugin(),
];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    hmr: {
      overlay: true,
    },
  },
});
