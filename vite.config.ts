import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Bat-Cave-Studio/', // Set base to your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
