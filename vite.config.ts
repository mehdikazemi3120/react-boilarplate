import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// TanStackRouterVite()
	],
	preview: {
		port: 5000,
		host: true,
	},
	server: {
		port: 4000,
	}
})
