import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/4.c7fdde7e.js","_app/immutable/chunks/index.e3305ba8.js","_app/immutable/chunks/blogs.89060219.js"];
export const stylesheets = ["_app/immutable/assets/4.af4d40e5.css"];
export const fonts = [];
