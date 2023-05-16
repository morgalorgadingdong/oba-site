import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.fbb26d30.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/index.3fdd7f9f.js"];
export const stylesheets = ["_app/immutable/assets/3.9a0b5f6e.css"];
export const fonts = [];
