import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: [
          { name: "prefixIds", params: { prefix: "svg_loader_prefix_" } },
        ],
      },
    }),
  ],
});
