<template>
  <nav class="w-3/12 flex justify-center m-auto">
    <router-link to="/" class="mx-2">{{ $t("navigation.home") }}</router-link
    >|
    <router-link to="/experiences" class="mx-2">{{
      $t("navigation.experiences")
    }}</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>
