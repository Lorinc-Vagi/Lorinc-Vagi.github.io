export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Lorinc-Vagi.github.io/_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BBgtSybi.js","app":"_app/immutable/entry/app.BcnBJnn5.js","imports":["_app/immutable/entry/start.BBgtSybi.js","_app/immutable/chunks/entry.CddMx755.js","_app/immutable/chunks/runtime.Bxle5EtZ.js","_app/immutable/entry/app.BcnBJnn5.js","_app/immutable/chunks/runtime.Bxle5EtZ.js","_app/immutable/chunks/render.9Yy4H-0D.js","_app/immutable/chunks/disclose-version.cWSXY2Zm.js","_app/immutable/chunks/if.CL-5qP-1.js","_app/immutable/chunks/store.C9nsdeUA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/munkaim",
				pattern: /^\/munkaim\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
