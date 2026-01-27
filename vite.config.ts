import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Empty string allows assets to be loaded relatively (e.g. "assets/index.js")
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});