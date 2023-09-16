<template>
  <div class="grid grid-cols-1 lg:grid-cols-[30%_70%] mb-10">
    <img
      class="w-1/3 md:w-1/4 mb-12 lg:mb-0 lg:w-1/2 3xl:w-8/12 mx-auto h-full"
      :src="educationImage"
      :alt="`${displayedEducation.title} icon`"
    />
    <div>
      <h3 class="font-semibold text-center lg:text-left mt-4 lg:mt-0">
        {{ displayedEducation.title }}
      </h3>
      <p class="my-2 text-center lg:text-left">
        {{ displayedEducation.description }}
      </p>
      <ul
        class="list-none lg:list-disc text-center lg:text-left ml-0 lg:ml-5 mt-4"
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
