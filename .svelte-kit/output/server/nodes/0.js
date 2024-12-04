

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BJds5sR3.js","_app/immutable/chunks/disclose-version.cWSXY2Zm.js","_app/immutable/chunks/runtime.Bxle5EtZ.js","_app/immutable/chunks/legacy.Dv4cU-xH.js"];
export const stylesheets = ["_app/immutable/assets/0.CBLekmjr.css"];
export const fonts = [];
