import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    allowedHosts: ['81bb-190-135-87-235.ngrok-free.app'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
