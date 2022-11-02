import { createApp } from "vue"
import "./index.css"
import router from "./router/index"
import { createHead } from "@vueuse/head"

import App from "./App.vue"

import messages from "@intlify/vite-plugin-vue-i18n/messages"
import { createI18n } from "vue-i18n"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faMugHot,
  faFolderOpen,
  faRoute,
  faLanguage,
  faCodeMerge,
} from "@fortawesome/free-solid-svg-icons"

import {
  faGithub,
  faBuffer,
  faFedora,
  faWindows,
  faHtml5,
  faCss3,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faPhp,
  faJava,
  faPython,
  faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faMugHot,
  faFolderOpen,
  faRoute,
  faLanguage,
  faCodeMerge,
  faGithub,
  faBuffer,
  faFedora,
  faWindows,
  faHtml5,
  faCss3,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faPhp,
  faJava,
  faPython,
  faRaspberryPi
)

const i18n = createI18n({
  locale: navigator.language.split("-")[0],
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
  messages,
})

const head = createHead()

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon)

app.use(router)
app.use(head)
app.use(i18n)
app.mount("#app")
