import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.8b54fed1.js","_app/immutable/chunks/index.ccc3dc3a.js","_app/immutable/chunks/splide.min.5029779c.js","_app/immutable/chunks/TourCard.c8eaf06e.js","_app/immutable/chunks/tours.b1893224.js"];
export const stylesheets = ["_app/immutable/assets/2.8349dd6c.css","_app/immutable/assets/splide.6c527891.css","_app/immutable/assets/TourCard.5401b428.css"];
export const fonts = [];
