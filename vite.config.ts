import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config({ override: true });

export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': 'http://localhost:10000',
      '/websocket': 'http://localhost:10000',
    },
  },
});
