import { ref } from "vue";
import { defineStore } from "pinia";

export const useExperienceStore = defineStore("experience", () => {
  const experiences = ref([]);

  function getProfesionalExperiences() {
    return experiences.value.filter(
      (experience) => experience.voluntary === false
    );
  }

  function getVoluntaryExperiences() {
    return experiences.value.filter(
      (experience) => experience.voluntary === true
    );
  }

  async function fetchExperiences() {
    const experienceEndpoint = "/experiences";

    const experienceUrl = `${
      import.meta.env.VITE_API_URL
    }${experienceEndpoint}`;

    try {
      const experienceResponse = await fetch(experienceUrl);
      experiences.value = await experienceResponse.json();
    } catch (errors) {
      alert("An error occured, please contact administrator");
    }
  }

  return {
    getProfesionalExperiences,
    getVoluntaryExperiences,
    fetchExperiences,
  };
});
