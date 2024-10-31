// vite.config.js
import { defineConfig } from "file:///D:/Aqua/cef/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///D:/Aqua/cef/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\Aqua\\cef";
var vite_config_default = defineConfig({
  build: {
    outDir: "../../client_packages/cef"
  },
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        if (warning.code.startsWith("a11y-"))
          return;
        handler(warning);
      }
    })
  ],
  resolve: {
    alias: {
      "@api": path.resolve(__vite_injected_original_dirname, "./src/api"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@fonts": path.resolve(__vite_injected_original_dirname, "./src/fonts"),
      "@json": path.resolve(__vite_injected_original_dirname, "./src/json"),
      "@popups": path.resolve(__vite_injected_original_dirname, "./src/popups"),
      "@router": path.resolve(__vite_injected_original_dirname, "./src/router.js"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@views": path.resolve(__vite_injected_original_dirname, "./src/views")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBcXVhXFxcXGNlZlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQXF1YVxcXFxjZWZcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0FxdWEvY2VmL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0YnVpbGQ6IHtcclxuXHRcdG91dERpcjogJy4uLy4uL2NsaWVudF9wYWNrYWdlcy9jZWYnXHJcblx0fSxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRzdmVsdGUoe1xyXG5cdFx0XHRvbndhcm46ICh3YXJuaW5nLCBoYW5kbGVyKSA9PiB7XHJcblx0XHRcdFx0aWYgKHdhcm5pbmcuY29kZS5zdGFydHNXaXRoKCdhMTF5LScpKSByZXR1cm5cclxuXHRcdFx0XHRoYW5kbGVyKHdhcm5pbmcpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHQnQGFwaSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hcGknKSxcclxuXHRcdFx0J0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuXHRcdFx0J0Bmb250cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9mb250cycpLFxyXG5cdFx0XHQnQGpzb24nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvanNvbicpLFxyXG5cdFx0XHQnQHBvcHVwcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9wb3B1cHMnKSxcclxuXHRcdFx0J0Byb3V0ZXInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVyLmpzJyksXHJcblx0XHRcdCdAc3RvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3RvcmUnKSxcclxuXHRcdFx0J0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXHJcblx0XHRcdCdAdmlld3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdmlld3MnKVxyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxTQUFTLGNBQWM7QUFDdkIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixRQUFRLENBQUMsU0FBUyxZQUFZO0FBQzdCLFlBQUksUUFBUSxLQUFLLFdBQVcsT0FBTztBQUFHO0FBQ3RDLGdCQUFRLE9BQU87QUFBQSxNQUNoQjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUMzQyxlQUFlLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUN6RCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0MsU0FBUyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQzdDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNqRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNwRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUNoRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
