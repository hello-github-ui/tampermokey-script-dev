import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"

// https://vitejs.dev/config/
// vite 的配置文件
// 自定义构建过程
export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    build: {
        outDir: './docs',
    }
});
