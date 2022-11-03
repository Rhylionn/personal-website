import { defineStore } from "pinia"

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: [],
  }),
  getters: {
    getProjects(state) {
      return state.projects
    },
  },
  actions: {
    async fetchProjects() {
      const projectEndpoint = "/projects/latest"
      const projectUrl = `${import.meta.env.VITE_API_URL}${projectEndpoint}`

      try {
        const projectResponse = await fetch(projectUrl)
        this.projects = await projectResponse.json()
        console.log("Making an api call for projects")
      } catch (error) {
        console.log("Couldn’t fetch projects...")
      }
    },
  },
})
