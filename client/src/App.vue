<template>
  <NavBar />
  <router-view />
</template>

<script>
import { useHead } from "@vueuse/head"
import { onBeforeMount } from "vue"
import NavBar from "./components/NavBar.vue"

import { useProjectStore } from "./stores/projects"
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

    // Call api
    const projectStore = useProjectStore()

    onBeforeMount(() => {
      projectStore.fetchProjects()
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
