// PRODUCTION

import { defineConfig/*, loadEnv*/ } from "vite";
import react from '@vitejs/plugin-react-swc'

export default defineConfig((/*{ /*command, mode }*/) => {
// const env = loadEnv(mode, process.cwd());
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
  }/*,
  define: {
    VITE_APP_BACKEND_ADDRESS: JSON.stringify(env.VITE_APP_BACKEND_ADDRESS),
  },*/
 };
});


// DEV
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://spvending-api-container:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
*/