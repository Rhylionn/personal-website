<template>
  <div class="flex flex-col sm:flex-row mb-10 items-center">
    <img class="w-1/3 sm:w-1/5 h-full mx-auto sm:mr-12" :src="require(`../assets/images/${school.img}`)" :alt="`${school.name} icon`">
    <div class="w-full sm:w-4/5">
      <h3 class="font-semibold text-center sm:text-left mt-4 sm:mt-0">{{$t(`education.schools[${school.id}].name`)}}</h3>
      <p class="my-2 text-center sm:text-left">{{$t(`education.schools[${school.id}].description`)}}</p>
      <ul class="list-none sm:list-disc text-center sm:text-left ml-0 sm:ml-5 mt-4">
        <li v-for="item in 5" :key="item">
          {{$t(`education.schools[${school.id}].coursework.${item}`)}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    school: Object
  }
}
</script>

<style lang="postcss" scoped>
h3{
  
}
</style>