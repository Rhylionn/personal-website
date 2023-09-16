import { createApp } from "vue";
import "./index.css";
import router from "./router/index";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";

import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMugHot,
  faFolderOpen,
  faRoute,
  faLanguage,
  faCodeMerge,
  faUserTie,
  faHandshakeAngle,
  faChevronDown,
  faEthernet,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faBuffer,
  faFedora,
  faWindows,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faPhp,
  faJava,
  faPython,
  faRaspberryPi,
  faDocker,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMugHot,
  faFolderOpen,
  faRoute,
  faLanguage,
  faCodeMerge,
  faUserTie,
  faHandshakeAngle,
  faChevronDown,
  faEthernet,
  faGithub,
  faBuffer,
  faFedora,
  faWindows,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faPhp,
  faJava,
  faPython,
  faRaspberryPi,
  faDocker,
  faLinux
);

const i18n = createI18n({
  locale: navigator.language.split("-")[0],
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
  messages,
});

const head = createHead();
const pinia = createPinia();

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(router);
app.use(head);
app.use(pinia);
app.use(i18n);
app.mount("#app");
