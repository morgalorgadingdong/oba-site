import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, defineConfig, searchForWorkspaceRoot } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: [
			// Search up for workspace root
			searchForWorkspaceRoot(process.cwd()),
			// Your custom rules
			'/.netlify/functions/',
		  ],
		},
	  },

};

export default config;





// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });
