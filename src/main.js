import { createApp } from "vue"
import "./index.css"
import App from "./App.vue"

import messages from "@intlify/vite-plugin-vue-i18n/messages"
import { createI18n } from "vue-i18n"

const i18n = createI18n({
  locale: import.meta.env.VITE_APP_I18N_LOCALE,
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
  messages,
})

const app = createApp(App)
app.use(i18n)
app.mount("#app")
