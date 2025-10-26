import path from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const dirname = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(dirname, 'src'),
    }
  }
})
