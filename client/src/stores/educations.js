import { ref } from "vue";
import { defineStore } from "pinia";

export const useEducationStore = defineStore("education", () => {
  const educations = ref([]);

  function getEducations() {
    return educations.value;
  }

  async function fetchEducations() {
    const educationEndpoint = "/educations/latest";
    const educationUrl = `${import.meta.env.VITE_API_URL}${educationEndpoint}`;

    try {
      const educationResponse = await fetch(educationUrl);
      educations.value = await educationResponse.json();
    } catch (error) {
      alert("An error occured, please contact administrator");
    }
  }

  return { getEducations, fetchEducations };
});
