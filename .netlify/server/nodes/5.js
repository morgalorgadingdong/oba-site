import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/5.9775fcb8.js","_app/immutable/chunks/index.fe5c5514.js","_app/immutable/chunks/blogs.89060219.js"];
export const stylesheets = ["_app/immutable/assets/5.3b4992be.css"];
export const fonts = [];
