<template>
  <footer
    class="w-11/12 md:w-1/2 xl:w-1/3 m-auto flex justify-between items-center bottom-0"
  >
    <div>
      <a
        href="https://github.com/Rhylionn/personal-website/releases"
        class="flex items-center gap-2"
      >
        <FontAwesomeIcon icon="code-merge" size="lg" />
        <span class="ml-2">{{ versionNumber }}</span>
      </a>
    </div>
    <LangSelector />
    <p class="flex items-center gap-2">
      {{ $t("footer.technology") }}
      <FontAwesomeIcon :icon="['fab', 'vuejs']" size="xl" />
    </p>
  </footer>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";

import LangSelector from "./LangSelector.vue";
export default {
  name: "FooterInformations",
  components: {
    LangSelector,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: false,
    });

    let versionNumber = ref("");

    onBeforeMount(() => {
      fetch("https://api.github.com/repos/Rhylionn/personal-website/releases", {
        headers: {
          Accept: "application/vnd.github+json",
        },
      })
        .then((response) => response.json())
        .then((data) => (versionNumber.value = data[0].tag_name));
    });

    return { t, versionNumber };
  },
};
</script>
