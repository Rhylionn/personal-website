<template>
  <Transition name="fade" appear>
    <main
      class="w-11/12 xl:w-3/5 2xl:w-1/2 3xl:w-1/3 mx-auto my-8 min-h-screen"
    >
      <section id="profesional">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center md:text-left">
          <FontAwesomeIcon icon="fa-user-tie" size="xs" class="mr-4" />{{
            $t("profesional.heading")
          }}
        </h2>
        <WaitingLoader v-if="profesionalExperiences.length == 0" />
        <div v-else>
          <ExperienceOverview
            v-for="(experience, index) in profesionalExperiences"
            :key="index"
            :experience="experience"
            :lang="$i18n.locale"
          />
        </div>
      </section>
      <section id="voluntary">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center md:text-left">
          <FontAwesomeIcon icon="fa-handshake-angle" size="xs" class="mr-4" />{{
            $t("voluntary.heading")
          }}
        </h2>
        <WaitingLoader v-if="voluntaryExperiences.length == 0" />
        <div v-else>
          <ExperienceOverview
            v-for="(experience, index) in voluntaryExperiences"
            :key="index"
            :experience="experience"
            :lang="$i18n.locale"
          />
        </div>
      </section>
    </main>
  </Transition>
  <FooterInformations />
</template>

<script>
import { computed } from "vue";
import ExperienceOverview from "../components/ExperienceOverview.vue";
import FooterInformations from "../components/FooterInformations.vue";

import WaitingLoader from "../components/WaitingLoader.vue";

import { useExperienceStore } from "../stores/experiences";

export default {
  name: "ExperiencesView",
  components: {
    FooterInformations,
    ExperienceOverview,
    WaitingLoader,
  },
  setup() {
    const experienceStore = useExperienceStore();

    const profesionalExperiences = computed(() => {
      return experienceStore.getProfesionalExperiences();
    });

    const voluntaryExperiences = computed(() => {
      return experienceStore.getVoluntaryExperiences();
    });

    return { profesionalExperiences, voluntaryExperiences };
  },
};
</script>

<style lang="postcss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease;
}
</style>
