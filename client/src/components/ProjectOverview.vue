<template>
  <div
    class="bg-slate-900 rounded-md inline-block h-fit lg:h-56 xl:h-60 box-content"
  >
    <div
      class="h-17/20 opacity-90 px-6 py-4 flex justify-between rounded-md border-2 border-slate-800"
    >
      <div>
        <h3 class="font-bold mb-2 text-md flex items-center">
          {{ displayedProject.title }}

          <p v-if="project.repoLink !== undefined">
            <span class="mx-2 font-thin">-</span>
            <a
              :href="project.repoLink"
              class="font-thin tracking-tight text-sm"
            >
              <FontAwesomeIcon
                :icon="['fab', 'github']"
                size="l"
                class="mx-0.5"
              />
              Voir sur github
            </a>
          </p>
        </h3>
        <p>{{ displayedProject.description }}</p>
      </div>
    </div>
    <div class="h-15/100 py-2 rounded-b-md flex justify-center items-center">
      <FontAwesomeIcon
        v-for="(technology, index) in project.technologies"
        :key="index"
        :icon="technology"
        size="xl"
        class="w-12"
      />
    </div>
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  name: "ProjectOverview",
  props: {
    project: {
      type: Object,
      default() {
        return {};
      },
    },
    lang: {
      type: String,
      default() {
        return "en";
      },
    },
  },
  setup(props) {
    const displayedProject = ref(
      props.lang === "en" ? props.project.en : props.project.fr
    );

    watch(
      () => props.lang,
      () => {
        displayedProject.value =
          props.lang === "en" ? props.project.en : props.project.fr;
      }
    );

    return { displayedProject };
  },
};
</script>
