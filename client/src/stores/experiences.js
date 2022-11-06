import { defineStore } from "pinia"

export const useExperienceStore = defineStore("experience", {
  state: () => ({
    experiences: [],
  }),
  getters: {
    getProfesionalExperiences(state) {
      return state.experiences.filter(
        (experience) => experience.voluntary === false
      )
    },
    getVoluntaryExperiences(state) {
      return state.experiences.filter(
        (experience) => experience.voluntary === true
      )
    },
  },
  actions: {
    async fetchExperiences() {
      const experienceEndpoint = "/experiences"

      const experienceUrl = `${
        import.meta.env.VITE_API_URL
      }${experienceEndpoint}`

      try {
        const experienceResponse = await fetch(experienceUrl)
        this.experiences = await experienceResponse.json()
      } catch (errors) {
        alert("An error occured, please contact administrator")
      }
    },
  },
})
