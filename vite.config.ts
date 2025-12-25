
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: '/FinalGatePassManagementSystem/', // Your repo name
    plugins: [react()],
    define: {
      // This ensures process.env.API_KEY is replaced with the literal value during build
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || '')
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    },
    server: {
      port: 3000,
      open: true
    }
  };
});
