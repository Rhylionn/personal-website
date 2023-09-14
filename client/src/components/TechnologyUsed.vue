<template>
  <p class="w-2/5 md:w-1/5 mb-6 flex md:mr-5 mx-auto md:ml-0">
    <FontAwesomeIcon class="mr-3 w-6" :icon="icon" size="xl" />
    <span>{{ name }}</span>
  </p>
</template>

<script>
export default {
  name: "TechnologyUsed",
  props: {
    icon: {
      type: Array,
      default() {
        return [];
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
