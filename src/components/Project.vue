<template>
  <div class="bg-slate-900 rounded-md my-3">
    <div class="opacity-90 w-full h-auto px-6 py-4 flex rounded-md border-2 border-slate-800">
      <div class="w-3/4">
        <h3 class="font-bold mb-1">{{$t(`myWork.projects[${project.id}].name`)}}</h3>
        <p>{{$t(`myWork.projects[${project.id}].description`)}}</p>
      </div>
      <div class="w-1/4 flex justify-end items-center">
        <a v-if="project.ghLink !== undefined" :href="project.ghLink"><fa :icon="['fab', 'github']" size="xl"/></a>
      </div>
    </div>
    <div class="py-2 rounded-b-md flex justify-center items-center">
      <div class="m-auto">
        <fa v-for="(technology, index) in project.technologies" :key="index" :icon="['fab', technology]" size="xl" class="mx-2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  },
}
</script>