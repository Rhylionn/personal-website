import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './assets/tailwind.css'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMugHot, faFolderOpen, faRoute, faLanguage, faCodeMerge } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBuffer, faFedora, faWindows, faHtml5, faCss3, faJsSquare, faNodeJs, faVuejs, faPhp, faJava, faPython, faRaspberryPi } from '@fortawesome/free-brands-svg-icons'

library.add(faMugHot, faFolderOpen, faRoute, faLanguage, faCodeMerge, faGithub, faBuffer, faFedora, faWindows, faHtml5, faCss3, faJsSquare, faNodeJs, faVuejs, faPhp, faJava, faPython, faRaspberryPi)


function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})

const app = createApp(App)
const head = createHead()

app.component('fa', FontAwesomeIcon)

app.use(head)
app.use(router)
app.use(i18n)

app.mount('#app')
