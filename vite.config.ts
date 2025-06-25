import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'media', // entry point is media/main.tsx
  build: {
    outDir: '../dist',           // output to /dist
    emptyOutDir: true,
    rollupOptions: {
      input: 'media/main.tsx',
      output: {
        entryFileNames: 'main.js'
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './media')
    }
  }
});
