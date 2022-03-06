<template>
  <nav class="w-3/12 flex justify-center m-auto">
    <router-link to="/" class="mx-2">{{$t('navigation.home')}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>