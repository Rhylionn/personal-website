<template>
  <Transition name="fade" appear>
    <main class="w-11/12 sm:w-1/2 xl:w-1/3 mx-auto my-8">
      <header>
        <h1 class="font-black text-5xl text-center sm:text-left">
          {{ $t("header.title") }}
          <FontAwesomeIcon icon="mug-hot" size="xs" class="ml-4" />
        </h1>
        <p class="mt-12 text-lg text-center sm:text-left">
          {{ $t("header.aboutme") }}
        </p>
        <div class="my-8 flex justify-center sm:justify-start">
          <a
            class="bg-slate-900 py-3 px-4 rounded-md font-bold"
            :href="getResume"
            target="_blank"
            >{{ $t("header.dl-resume") }}</a
          >
        </div>
        <div class="flex justify-center gap-4 sm:justify-start">
          <a href="https://github.com/Rhylionn" target="_blank"
            ><img class="h-8" src="../assets/images/github-icon.svg"
          /></a>
          <a href="#" target="_blank"
            ><img class="h-8" src="../assets/images/htb-icon.svg"
          /></a>
          <a href="https://www.root-me.org/rhylionn" target="_blank"
            ><img
              class="h-8"
              src="../assets/images/rootme-icon.svg"
              alt="Rootme account"
          /></a>
          <a
            href="https://www.linkedin.com/in/thomas-bernard-esaip/"
            target="_blank"
            ><img
              class="h-8"
              src="../assets/images/linkedin-icon.svg"
              alt="LinkedIn account"
          /></a>
        </div>
      </header>
      <section id="myWork">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left">
          <FontAwesomeIcon icon="folder-open" size="xs" class="mr-4" />{{
            $t("myWork.heading")
          }}
        </h2>
        <div class="flex flex-col">
          <ProjectOverview
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :lang="$i18n.locale"
          />
        </div>
      </section>
      <section id="education">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left">
          <FontAwesomeIcon icon="route" size="xs" class="mr-4" />{{
            $t("education.heading")
          }}
        </h2>
        <div>
          <EducationOverview
            v-for="(education, index) in educations"
            :key="index"
            :education="education"
            :lang="$i18n.locale"
          />
        </div>
      </section>
      <section id="technologies">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left">
          <FontAwesomeIcon
            :icon="['fab', 'buffer']"
            size="xs"
            class="mr-4"
          />Technologies
        </h2>
        <div class="grid gap-1 grid-cols-2 sm:grid-cols-4">
          <TechnologyUsed :icon="['fab', 'fedora']" name="Fedora" />
          <TechnologyUsed :icon="['fab', 'windows']" name="Windows" />
          <TechnologyUsed :icon="['fab', 'github']" name="Github" />
          <TechnologyUsed :icon="['fab', 'html5']" name="HTML" />
          <TechnologyUsed :icon="['fab', 'css3']" name="CSS" />
          <TechnologyUsed :icon="['fab', 'js-square']" name="Javascript" />
          <TechnologyUsed :icon="['fab', 'node-js']" name="NodeJS" />
          <TechnologyUsed :icon="['fab', 'vuejs']" name="VueJS" />
          <TechnologyUsed :icon="['fab', 'php']" name="PHP" />
          <TechnologyUsed :icon="['fab', 'java']" name="Java" />
          <TechnologyUsed :icon="['fab', 'python']" name="Python" />
          <TechnologyUsed :icon="['fab', 'raspberry-pi']" name="Raspberry" />
        </div>
      </section>
    </main>
  </Transition>
  <FooterInformations />
</template>

<script>
import { ref, onBeforeMount } from "vue"

import FooterInformations from "../components/FooterInformations.vue"
import ProjectOverview from "../components/ProjectOverview.vue"
import EducationOverview from "../components/EducationOverview.vue"
import TechnologyUsed from "../components/TechnologyUsed.vue"

export default {
  name: "HomeView",
  components: {
    FooterInformations,
    ProjectOverview,
    EducationOverview,
    TechnologyUsed,
  },
  setup() {
    const educations = ref([])

    // Fetch educations
    async function fetchEducations() {
      const educationEndpoint = "/educations/latest"
      const educationUrl = `${import.meta.env.VITE_API_URL}${educationEndpoint}`

      const educationResponse = await fetch(educationUrl)
      educations.value = await educationResponse.json()
    }

    const projects = ref([])

    // Fetch projects
    async function fetchProjects() {
      const projectEndpoint = "/projects/latest"
      const projectUrl = `${import.meta.env.VITE_API_URL}${projectEndpoint}`

      const projectResponse = await fetch(projectUrl)
      projects.value = await projectResponse.json()
    }

    onBeforeMount(async () => {
      await fetchEducations()
      await fetchProjects()
    })

    // Resume

    return { educations, projects }
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease;
}
</style>