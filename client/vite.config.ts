import path from 'path'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    /* Global plugin */
    plugins: [react()],

    /* Scss Settings */
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/main.scss";'
        },
      },
    },

    /* Build directory */
    build: {
      outDir: 'build'
    },

    /* Default alias */
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        },
      ],
    },

    /* Proxy settings */
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/graphql': {
          target: `${process.env.VITE_API_URL}/graphql`,
          changeOrigin: true,
        }
      }
    }
  })
}
