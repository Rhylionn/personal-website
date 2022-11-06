<template>
  <img :src="getLoaderImage" alt="" class="w-28 h-28 mx-auto" />
</template>

<script>
import { computed } from "vue"

export default {
  setup() {
    const getLoaderImage = computed(() => {
      return new URL("../assets/bars-scale.svg", import.meta.url)
    })

    return { getLoaderImage }
  },
}
</script>
