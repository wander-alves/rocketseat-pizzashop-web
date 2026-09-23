import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
	test: {
		setupFiles: ['./tests/setup.ts'],
		environment: 'happy-dom',
	}
} as UserConfig & {
	test: any,
})
