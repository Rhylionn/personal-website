<template>
  <button
    data-dropdown-toggle="dropdown"
    class="px-4 py-2 rounded-md bg-zinc-900 text-white"
    @click="changeLanguage"
  >
    <FontAwesomeIcon class="mr-3" icon="language" size="xl" />{{
      locale.toUpperCase() === "EN" ? "FR" : "EN"
    }}
  </button>
</template>

<script>
import { onMounted } from "vue"
import { useI18n } from "vue-i18n"
export default {
  name: "LangSelector",
  setup() {
    const { locale } = useI18n({
      inheritLocale: true,
    })

    function changeLanguage() {
      locale.value = locale.value === "en" ? "fr" : "en"
    }

    onMounted(() => {
      locale.value = navigator.language.split("-")[0]
    })

    return { locale, changeLanguage }
  },
}
</script>
