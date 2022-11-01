<template>
  <NavBar />
  <router-view />
</template>

<script>
import { useHead } from "@vueuse/head"
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar,
  },
  setup() {
    useHead({
      title: "Thomas BERNARD - Engineering student in cybersecurity",
      meta: [
        {
          name: "description",
          content: "Thomas, engineering student in the cybersecurity field",
        },
        {
          name: "keywords",
          content: "Cybersecurity, student, esaip, engineer, privacy",
        },
        {
          name: "author",
          content: "Thomas BERNARD",
        },
      ],
    })
  },
}
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}
#app {
  @apply min-h-screen;
  @apply bg-gradient-to-br from-black to-midnight bg-cover;
  @apply text-white font-sans;
  @apply py-5;
}
</style>
