// PRODUCTION
/*
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {
 return {
   plugins: [react()],
   server: {
     
     port: 3000,
     host: true,
     watch: {
      usePolling: true,
     },
     esbuild: {
      target: "esnext",
      platform: "linux",
    },
  }
 };
});
*/

// DEV

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
	port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
