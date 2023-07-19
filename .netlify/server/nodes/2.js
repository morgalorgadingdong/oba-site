import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.a73fdd6f.js","_app/immutable/chunks/index.f24d19fd.js","_app/immutable/chunks/splide.min.5029779c.js","_app/immutable/chunks/TourCard.f7ed99f5.js","_app/immutable/chunks/tours.f28d6fdc.js"];
export const stylesheets = ["_app/immutable/assets/2.3f6b9e93.css","_app/immutable/assets/splide.6c527891.css","_app/immutable/assets/TourCard.5401b428.css"];
export const fonts = [];
