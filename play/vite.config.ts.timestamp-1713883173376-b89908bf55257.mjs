// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/develop/%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/%E8%87%AA%E6%90%AD%E2%80%94%E2%80%94V3%E7%BB%84%E4%BB%B6%E5%BA%93/mingcomity-design/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.6/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/develop/%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/%E8%87%AA%E6%90%AD%E2%80%94%E2%80%94V3%E7%BB%84%E4%BB%B6%E5%BA%93/mingcomity-design/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/develop/%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/%E8%87%AA%E6%90%AD%E2%80%94%E2%80%94V3%E7%BB%84%E4%BB%B6%E5%BA%93/mingcomity-design/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///E:/develop/%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/%E8%87%AA%E6%90%AD%E2%80%94%E2%80%94V3%E7%BB%84%E4%BB%B6%E5%BA%93/mingcomity-design/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.25_vite@5.2.8_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/develop/%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/%E8%87%AA%E6%90%AD%E2%80%94%E2%80%94V3%E7%BB%84%E4%BB%B6%E5%BA%93/mingcomity-design/play/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZXZlbG9wXFxcXFx1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOFxcXFxcdTgxRUFcdTY0MkRcdTIwMTRcdTIwMTRWM1x1N0VDNFx1NEVGNlx1NUU5M1xcXFxtaW5nY29taXR5LWRlc2lnblxcXFxwbGF5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkZXZlbG9wXFxcXFx1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOFxcXFxcdTgxRUFcdTY0MkRcdTIwMTRcdTIwMTRWM1x1N0VDNFx1NEVGNlx1NUU5M1xcXFxtaW5nY29taXR5LWRlc2lnblxcXFxwbGF5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kZXZlbG9wLyVFOSVBMSVCOSVFNyU5QiVBRSVFNSVBRSU5RSVFNiU4OCU5OC8lRTglODclQUElRTYlOTAlQUQlRTIlODAlOTQlRTIlODAlOTRWMyVFNyVCQiU4NCVFNCVCQiVCNiVFNSVCQSU5My9taW5nY29taXR5LWRlc2lnbi9wbGF5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZUpzeCgpLCBWdWVEZXZUb29scygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc2EsU0FBUyxlQUFlLFdBQVc7QUFFemMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUwyTCxJQUFNLDJDQUEyQztBQVFwUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7QUFBQSxFQUN4QyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
