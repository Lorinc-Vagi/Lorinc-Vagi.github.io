import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/Lorinc-Vagi.github.io/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
	
});
