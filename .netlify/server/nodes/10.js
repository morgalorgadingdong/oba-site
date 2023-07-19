import * as universal from '../entries/pages/tours/_page.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/tours/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tours/+page.ts";
export const imports = ["_app/immutable/nodes/10.36e7a2dc.js","_app/immutable/chunks/index.f24d19fd.js","_app/immutable/chunks/TourCard.f7ed99f5.js","_app/immutable/chunks/tours.f28d6fdc.js","_app/immutable/chunks/Calendar.6cd7c45d.js"];
export const stylesheets = ["_app/immutable/assets/10.b9d7972f.css","_app/immutable/assets/TourCard.5401b428.css","_app/immutable/assets/Calendar.b67e6c6d.css"];
export const fonts = [];
