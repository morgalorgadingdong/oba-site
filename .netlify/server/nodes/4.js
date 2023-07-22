import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/4.5ca5f33c.js","_app/immutable/chunks/index.fe5c5514.js","_app/immutable/chunks/blogs.89060219.js"];
export const stylesheets = ["_app/immutable/assets/4.3b4992be.css"];
export const fonts = [];
