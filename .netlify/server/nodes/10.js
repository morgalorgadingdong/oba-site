import * as server from '../entries/pages/store/checkout/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/store/checkout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/store/checkout/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.09be4f5c.js","_app/immutable/chunks/index.fe5c5514.js"];
export const stylesheets = [];
export const fonts = [];
