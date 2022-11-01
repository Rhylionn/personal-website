<template>
  <router-view />
</template>

<script>
import { useHead } from "@vueuse/head"
export default {
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
