<template>
  <div class="flex flex-col sm:flex-row mb-10 items-center">
    <img
      class="w-1/3 sm:w-1/5 h-full mx-auto sm:mr-12"
      :src="educationImage"
      :alt="`${displayedEducation.title} icon`"
    />
    <div class="w-full sm:w-4/5">
      <h3 class="font-semibold text-center sm:text-left mt-4 sm:mt-0">
        {{ displayedEducation.title }}
      </h3>
      <p class="my-2 text-center sm:text-left">
        {{ displayedEducation.description }}
      </p>
      <ul
        class="list-none sm:list-disc text-center sm:text-left ml-0 sm:ml-5 mt-4"
      >
        <li v-for="course in displayedEducation.courseWork" :key="course">
          {{ course }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
  name: "EducationOverview",
  props: {
    education: {
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
    const educationLogoUrl = `${import.meta.env.VITE_API_URL}/static/images/${
      props.education.img
    }`;

    const educationImage = computed(() => {
      return new URL(educationLogoUrl, import.meta.url);
    });

    const displayedEducation = ref(
      props.lang === "en" ? props.education.en : props.education.fr
    );

    watch(
      () => props.lang,
      () => {
        displayedEducation.value =
          props.lang === "en" ? props.education.en : props.education.fr;
      }
    );

    return { educationImage, displayedEducation };
  },
};
</script>
