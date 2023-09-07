<template>
  <Transition name="fade" appear>
    <main class="w-11/12 sm:w-1/2 xl:w-1/3 mx-auto my-8">
      <header>
        <h1
          class="font-black text-3xl sm:text-5xl text-center sm:text-left sm:flex sm:items-center sm:gap-4"
        >
          {{ $t("header.title-hi") }}
          <img
            src="../assets/images/profile-picture.jpg"
            alt="Profile picture"
            class="w-20 h-20 rounded-full border-4 border-white mx-auto my-2 sm:mx-0 sm:my-0"
          />
          {{ $t("header.title-name") }}
          <FontAwesomeIcon icon="mug-hot" size="xs" class="ml-4" />
        </h1>
        <p class="mt-12 text-lg text-center sm:text-left">
          {{ $t("header.aboutme") }}
        </p>

        <div
          class="flex flex-col sm:flex-row gap-8 sm:justify-start items-center my-8"
        >
          <div class="flex gap-4">
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

          <div class="flex justify-center sm:justify-start">
            <a
              class="bg-slate-900 py-2 px-4 rounded-md font-bold"
              :href="getResume"
              target="_blank"
              rel="nofollow"
              >{{ $t("header.dl-resume") }}</a
            >
          </div>
        </div>
      </header>
      <section id="myWork">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left">
          <FontAwesomeIcon icon="folder-open" size="xs" class="mr-4" />{{
            $t("myWork.heading")
          }}
        </h2>
        <WaitingLoader v-if="projects.length == 0" />
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <WaitingLoader v-if="educations.length == 0" />
        <div v-else>
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
          <TechnologyUsed :icon="['fab', 'linux']" name="Linux" />
          <TechnologyUsed :icon="['fab', 'fedora']" name="Fedora" />
          <TechnologyUsed :icon="['fab', 'windows']" name="Windows" />
          <TechnologyUsed :icon="['fab', 'github']" name="Github" />
          <TechnologyUsed :icon="['fab', 'docker']" name="Docker" />
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
import { computed } from "vue";

import { useProjectStore } from "../stores/projects";
import { useEducationStore } from "../stores/educations";

import FooterInformations from "../components/FooterInformations.vue";
import ProjectOverview from "../components/ProjectOverview.vue";
import EducationOverview from "../components/EducationOverview.vue";
import TechnologyUsed from "../components/TechnologyUsed.vue";

import WaitingLoader from "../components/WaitingLoader.vue";

export default {
  name: "HomeView",
  components: {
    FooterInformations,
    ProjectOverview,
    EducationOverview,
    TechnologyUsed,
    WaitingLoader,
  },
  setup() {
    const projectStore = useProjectStore();
    const educationStore = useEducationStore();

    const projects = computed(() => {
      return projectStore.getProjects;
    });

    const educations = computed(() => {
      return educationStore.getEducations;
    });

    const getResume = computed(() => {
      return new URL("../assets/cv-fr.pdf", import.meta.url).href;
    });

    return { educations, projects, getResume };
  },
};
</script>

<style lang="postcss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1.5s ease;
}
</style>
