import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./resources/scss/app.scss"`,
            },
        },
    },
    plugins: [
        laravel({
            input: "resources/js/bootstrap.tsx",
            refresh: true,
        }),
        react(),
    ],
});
