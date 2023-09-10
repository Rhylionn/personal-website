import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import vueI18n from "@intlify/vite-plugin-vue-i18n"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
})
