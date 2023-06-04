import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), react(), VitePWA()],
    server: {
        proxy: {
            '/api/v1': 'http://217.182.119.171:8083/',
            changeOrigin: 'true',
        },
    },
})
