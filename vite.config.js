import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			name: 'treat-js-files-as-jsx',
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/)) return null
				// Use the exposed transform from vite, instead of directly transforming with esbuild
				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic',
				})
			},
		},
		react(),
	],
	server: {
		port: 3000,
		open: true,
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: '/src',
			},
		],
	},
	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
})
