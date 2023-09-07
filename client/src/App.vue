<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

import { onBeforeMount } from "vue";

import { useHead } from "@vueuse/head";

import { useProjectStore } from "./stores/projects";
import { useEducationStore } from "./stores/educations";
import { useExperienceStore } from "./stores/experiences";

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
    });

    const projectStore = useProjectStore();
    const educationStore = useEducationStore();
    const experienceStore = useExperienceStore();

    onBeforeMount(async () => {
      await projectStore.fetchProjects();
      await educationStore.fetchEducations();
      await experienceStore.fetchExperiences();
    });
  },
};
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}
#app {
  @apply min-h-screen;
  @apply bg-gradient-to-br from-midnight-200 to-midnight-800 to-70% bg-cover;
  @apply text-white font-sans;
  @apply py-5;
}
</style>
