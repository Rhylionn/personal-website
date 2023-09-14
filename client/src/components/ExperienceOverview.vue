<template>
  <div class="my-8">
    <div class="flex items-center md:items-baseline flex-col md:flex-row">
      <h3 class="font-bold text-2xl">{{ experience.name }}</h3>
      <span class="mx-2 hidden md:inline">-</span>
      <p>{{ displayedExperience.subject }}</p>
    </div>
    <p class="text-md my-0 md:text-left text-center">
      {{
        `${experienceYear} - ${experience.duration} ${$t("profesional.date")}`
      }}
    </p>

    <p class="text-center my-8 md:text-left md:my-2">
      {{ displayedExperience.description }}
    </p>

    <div class="my-2">
      <h4 class="font-semibold text-md text-center md:text-left">
        {{ $t("profesional.tasks-made") }}
      </h4>
      <ul class="list-none md:list-disc text-center md:text-left ml-5 my-2">
        <li
          v-for="(task, index) in displayedExperience.tasks"
          :key="index"
          class="my-2 md:my-0"
        >
          {{ task }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "ExperienceOverview",
  props: {
    experience: {
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
    const experienceYear = ref(new Date(props.experience.date).getFullYear());

    const displayedExperience = ref(
      props.lang === "en" ? props.experience.en : props.experience.fr
    );

    watch(
      () => props.lang,
      () => {
        displayedExperience.value =
          props.lang === "en" ? props.experience.en : props.experience.fr;
      }
    );
    return { props, experienceYear, displayedExperience };
  },
};
</script>
