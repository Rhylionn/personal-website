import { ref } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", () => {
  const projects = ref([]);

  async function getProjects() {
    if (projects.value.length == 0) {
      await fetchProjects();
    }
    return projects;
  }

  async function fetchProjects() {
    const projectEndpoint = "/projects/latest";
    const projectUrl = `${import.meta.env.VITE_API_URL}${projectEndpoint}`;

    try {
      const projectResponse = await fetch(projectUrl);
      projects.value = await projectResponse.json();
    } catch (error) {
      console.log("An error occured, please contact administrator");
    }
  }

  return { getProjects, fetchProjects };
});
