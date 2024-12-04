import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/Lorinc-Vagi.github.io'; // Replace with your repo name

export default {
kit: {
	adapter: adapter({
	fallback: 'index.html', // Fallback to SPA behavior
	}),
	paths: {
	base,
	},
},
};


// export default config;
