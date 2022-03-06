<template>
  <button data-dropdown-toggle="dropdown" class="px-4 py-2 rounded-md bg-zinc-900 text-white" @click="changeLanguage"><fa class="mr-3" icon="language" size="xl" />{{language.toUpperCase() === 'EN' ? 'FR' : 'EN'}}</button>
</template>

<script>
export default {
  name: 'Lang',
  data() {
    return {
      language: ''
    }
  },
  methods: {
    changeLanguage() {
      this.language = this.language === 'fr' ? 'en' : 'fr'
      this.$i18n.locale = this.language
    }
  },
  created(){
    this.language = navigator.language.split('-')[0]
    this.$i18n.locale = this.language
    console.log(this.language)
  }
}
</script>

<style lang="postcss" scoped>

</style>