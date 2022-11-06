import { defineStore } from "pinia"

export const useExperienceStore = defineStore("experience", {
  state: () => ({
    profesionalExperiences: [],
    voluntaryExperiences: [],
  }),
  getters: {
    getProfesionalExperiences(state) {
      return state.profesionalExperiences
    },
    getVoluntaryExperieces(state) {
      return state.voluntaryExperiences
    },
  },
  actions: {},
})
