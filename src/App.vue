<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar'
import { useHead } from '@vueuse/head'

export default {
  components: {
    Navbar
  },
  setup() {
    useHead({
      title: 'Thomas BERNARD - Engineering student in cybersecurity',
      meta: [{
          name: 'description',
          content: 'Thomas, engineering student in the cybersecurity field'
        },
        {
            name: 'keywords',
            content: 'Cybersecurity, student, esaip, engineer, privacy'
        },
        {
          name: 'author',
          content: 'Thomas BERNARD'
        }
      ]
    })
  }
}
</script>

<style lang="postcss">
html{
  scroll-behavior: smooth;
}

#app{
  @apply min-h-screen;
  @apply bg-gradient-to-br from-black to-midnight bg-cover;
  @apply text-white font-sans;
  @apply py-5;
}
</style>
