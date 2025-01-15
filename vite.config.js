import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BloodHeroesApp/',  // Update this with your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output goes to the dist folder
    sourcemap: true, // Enable sourcemaps for debuggingfbdfbd
  },
  server: {
    open: true, // Automatically open the browser when running the dev server
    port: 3000, // Set the port for the development serversdbsdbsd
  },
});
