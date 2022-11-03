<template>
  <Transition name="fade" appear>
    <main class="w-11/12 md:w-1/2 xl:w-1/3 mx-auto my-8">
      <section id="profesional">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center md:text-left">
          <FontAwesomeIcon icon="fa-user-tie" size="xs" class="mr-4" />{{
            $t("profesional.heading")
          }}
        </h2>
        <div>
          <ExperienceOverview
            v-for="(experience, index) in profesionalExperiences"
            :key="index"
            :experience="experience"
            :lang="$i18n.locale"
          />
        </div>
      </section>
      <section id="voluntary">
        <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left">
          <FontAwesomeIcon icon="fa-handshake-angle" size="xs" class="mr-4" />{{
            $t("voluntary.heading")
          }}
        </h2>
        <div>
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
import { ref, onBeforeMount } from "vue"
import { useI18n } from "vue-i18n"
import ExperienceOverview from "../components/ExperienceOverview.vue"
import FooterInformations from "../components/FooterInformations.vue"

import { useProjectStore } from "../stores/projects"

export default {
  name: "ExperiencesView",
  components: {
    FooterInformations,
    ExperienceOverview,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
    })

    const projectStore = useProjectStore()
    console.log(projectStore.getProjects)

    const profesionalExperiences = ref([])
    const voluntaryExperiences = ref([])

    const profesionalExperienceEndpoint = "/experiences/profesional"
    const voluntaryExperienceEndpoint = "/experiences/voluntary"

    async function fetchExperiences(endpoint) {
      const experienceUrl = `${import.meta.env.VITE_API_URL}${endpoint}`

      const experienceResponse = await fetch(experienceUrl)
      return await experienceResponse.json()
    }

    onBeforeMount(async () => {
      profesionalExperiences.value = await fetchExperiences(
        profesionalExperienceEndpoint
      )
      voluntaryExperiences.value = await fetchExperiences(
        voluntaryExperienceEndpoint
      )

      console.log("calling mongo")
    })

    return { t, profesionalExperiences, voluntaryExperiences }
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
