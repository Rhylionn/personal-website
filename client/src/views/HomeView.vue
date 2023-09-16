<template>
  <Transition name="fade" appear>
    <main class="w-11/12 xl:w-3/5 2xl:w-1/2 3xl:w-1/3 mx-auto my-8">
      <header>
        <h1
          class="font-black text-3xl lg:text-9/5xl text-center lg:text-left lg:flex lg:items-center lg:gap-4"
        >
          {{ $t("header.title-hi") }}
          <img
            src="../assets/images/profile-picture.jpg"
            alt="Profile picture"
            class="w-20 h-20 rounded-full border-4 border-white mx-auto my-2 lg:mx-0 lg:my-0"
          />
          {{ $t("header.title-name") }}
          <FontAwesomeIcon icon="mug-hot" size="xs" class="ml-4" />
        </h1>
        <p class="mt-12 text-lg text-center lg:text-left">
          {{ $t("header.aboutme") }}
        </p>

        <div
          class="flex flex-col lg:flex-row gap-8 lg:justify-start items-center my-8"
        >
          <div class="flex gap-4">
            <a href="https://github.com/Rhylionn" target="_blank"
              ><img
                class="h-8 hover:opacity-80"
                src="../assets/images/github-icon.svg"
            /></a>
            <a href="https://app.hackthebox.com/profile/373475" target="_blank"
              ><img
                class="h-8 hover:opacity-80"
                src="../assets/images/htb-icon.svg"
            /></a>
            <a href="https://www.root-me.org/rhylionn" target="_blank"
              ><img
                class="h-8 hover:opacity-80"
                src="../assets/images/rootme-icon.svg"
                alt="Rootme account"
            /></a>
            <a
              href="https://www.linkedin.com/in/thomas-bernard-infosec/"
              target="_blank"
            >
              <img
                class="h-8 hover:opacity-80"
                src="../assets/images/linkedin-icon.svg"
                alt="LinkedIn account"
              />
            </a>
          </div>

          <a
            class="bg-slate-900 py-2 px-4 rounded-md font-bold border-slate-800 border-2 hover:opacity-90"
            :href="getResume"
            target="_blank"
            rel="nofollow"
          >
            {{ $t("header.dl-resume") }}
          </a>
        </div>
      </header>
      <section id="myWork">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center lg:text-left">
          <FontAwesomeIcon icon="folder-open" size="xs" class="mr-4" />
          {{ $t("myWork.heading") }}
        </h2>
        <WaitingLoader v-if="visibleProjects.length === 0" />
        <div v-else>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectOverview
              v-for="(project, index) in visibleProjects"
              :key="index"
              :project="project"
              :lang="$i18n.locale"
            />
          </div>
          <button
            v-show="visibleProjects.length < projects.length"
            class="block mx-auto my-4 opacity-75 hover:opacity-100"
            @click="showMore"
          >
            {{ $t("myWork.showmore-btn") }}
            <FontAwesomeIcon icon="fa-chevron-down" size="xs" class="mx-0.5" />
          </button>
        </div>
      </section>
      <section id="education">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center lg:text-left">
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
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center lg:text-left">
          <FontAwesomeIcon
            :icon="['fab', 'buffer']"
            size="xs"
            class="mr-4"
          />Technologies
        </h2>
        <div class="grid gap-1 grid-cols-2 md:grid-cols-4">
          <TechnologyUsed :icon="['fab', 'fedora']" name="Fedora" />
          <TechnologyUsed :icon="['fab', 'windows']" name="Windows" />
          <TechnologyUsed :icon="['fab', 'python']" name="Python" />
          <TechnologyUsed :icon="['fab', 'docker']" name="Docker" />
        </div>
        <p class="lg:text-left text-center">
          <a href="https://github.com/Rhylionn/dotfiles" class="font-bold">{{
            $t("technologies.click-here")
          }}</a>
          {{ $t("technologies.environment") }}
        </p>
      </section>
    </main>
  </Transition>
  <FooterInformations />
</template>

<script>
import { computed, onBeforeMount, ref, watch } from "vue";

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

    const maxProject = ref(4);
    const projects = ref([]);
    const visibleProjects = ref([]);

    onBeforeMount(async () => {
      projects.value = (await projectStore.getProjects()).value;
      visibleProjects.value = projects.value.slice(0, maxProject.value);
    });

    function showMore() {
      if (maxProject.value <= projects.value.length) {
        maxProject.value += 4;
      }
    }

    watch(maxProject, () => {
      visibleProjects.value = projects.value.slice(0, maxProject.value);
    });

    const educations = computed(() => {
      return educationStore.getEducations();
    });

    const getResume = computed(() => {
      return new URL("../assets/cv-fr.pdf", import.meta.url).href;
    });

    return { educations, showMore, getResume, projects, visibleProjects };
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
