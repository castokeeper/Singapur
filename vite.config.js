import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/Singapur/', // Esto es crucial para GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    emptyOutDir: true,
    chunkSizeWarningLimit: 10000 // Aumentado de 500 KB a 1000 KB
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true
  },
  publicDir: 'public'
});