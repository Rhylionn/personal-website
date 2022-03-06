<template>
  <p class="w-2/5 sm:w-1/5 mb-6 flex sm:mr-5 mx-auto sm:ml-0">
    <fa class="mr-3 w-6" :icon="icon" size="xl"/>
    <span>{{name}}</span>
  </p>
</template>

<script>
export default {
  name: 'Technology',
  props: {
    icon: Array,
    name: String
  }
}
</script>