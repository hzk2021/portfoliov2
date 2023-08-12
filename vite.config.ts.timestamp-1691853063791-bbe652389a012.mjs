// vite.config.ts
import { defineConfig } from "file:///Users/zhenkai/Desktop/vite-portfolio/new-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///Users/zhenkai/Desktop/vite-portfolio/new-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)\/title>/,
        `<title>Zhenkai's Portfolio v2</title>`
      );
    }
  };
};
var vite_config_default = defineConfig({
  base: "./",
  plugins: [react(), htmlPlugin()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhlbmthaS9EZXNrdG9wL3ZpdGUtcG9ydGZvbGlvL25ldy1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy96aGVua2FpL0Rlc2t0b3Avdml0ZS1wb3J0Zm9saW8vbmV3LXBvcnRmb2xpby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvemhlbmthaS9EZXNrdG9wL3ZpdGUtcG9ydGZvbGlvL25ldy1wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG5cbmNvbnN0IGh0bWxQbHVnaW4gPSgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnaHRtbC10cmFuc2Zvcm0nLFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKFxuICAgICAgICAvPHRpdGxlPiguKj8pXFwvdGl0bGU+LyxcbiAgICAgICAgYDx0aXRsZT5aaGVua2FpJ3MgUG9ydGZvbGlvIHYyPC90aXRsZT5gXG4gICAgICApXG4gICAgfVxuXG4gIH1cbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiLi9cIixcbiAgcGx1Z2luczogW3JlYWN0KCksIGh0bWxQbHVnaW4oKV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLG9CQUFvQjtBQUN4VyxPQUFPLFdBQVc7QUFHbEIsSUFBTSxhQUFZLE1BQU07QUFDdEIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sbUJBQW1CLE1BQU07QUFDdkIsYUFBTyxLQUFLO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBRUY7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQ2pDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
