import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    loaderOptions: {
        scss: {
            prependData: `@import "./resources/scss/app.scss"`,
        },
    },
    plugins: [
        laravel({
            input: "resources/js/bootstrap.tsx",
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },
});
