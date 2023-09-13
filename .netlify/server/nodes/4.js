import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/4.8ae36031.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/index.fe5c5514.js"];
export const stylesheets = ["_app/immutable/assets/4.0f1e687e.css"];
export const fonts = [];
