import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
	build: {
		outDir: '../../client_packages/cef'
	},
	plugins: [
		svelte({
			onwarn: (warning, handler) => {
				if (warning.code.startsWith('a11y-')) return
				handler(warning)
			}
		})
	],
	resolve: {
		alias: {
			'@api': path.resolve(__dirname, './src/api'),
			'@components': path.resolve(__dirname, './src/components'),
			'@fonts': path.resolve(__dirname, './src/fonts'),
			'@json': path.resolve(__dirname, './src/json'),
			'@popups': path.resolve(__dirname, './src/popups'),
			'@router': path.resolve(__dirname, './src/router.js'),
			'@store': path.resolve(__dirname, './src/store'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@aquafonts': path.resolve(__dirname, './src/aquafonts'),
			'@views': path.resolve(__dirname, './src/views')
		}
	}
})
