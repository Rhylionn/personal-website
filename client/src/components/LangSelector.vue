<template>
  <button
    data-dropdown-toggle="dropdown"
    class="px-4 py-2 rounded-md bg-zinc-900 text-white"
    @click="$i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'"
  >
    <FontAwesomeIcon class="mr-3" icon="language" size="xl" />{{
      $i18n.locale.toUpperCase() === "EN" ? "FR" : "EN"
    }}
  </button>
</template>

<script>
export default {
  name: "LangSelector",
}
</script>
