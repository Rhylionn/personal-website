import { defineStore } from "pinia"

export const useEducationStore = defineStore("education", {
  state: () => ({
    educations: [],
  }),
  getters: {
    getEducations(state) {
      return state.educations
    },
  },
  actions: {
    async fetchEducations() {
      const educationEndpoint = "/educations/latest"
      const educationUrl = `${import.meta.env.VITE_API_URL}${educationEndpoint}`

      try {
        const educationResponse = await fetch(educationUrl)
        this.educations = await educationResponse.json()
        console.log("Making api call for educations")
      } catch (error) {
        console.log("Couldn’t fetch educations")
      }
    },
  },
})
