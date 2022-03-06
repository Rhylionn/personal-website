<template>
  <footer class="w-11/12 sm:w-1/2 xl:w-1/3   m-auto flex justify-between items-center">
    <div>
      <a href=""><fa icon="code-merge" size="lg"/><span class="ml-2">{{versionNumber}}</span></a>
    </div>
    <Lang />
    <p>
      {{ $t('footer.technology') }} <fa :icon="['fab', 'vuejs']" size="xl"/>
    </p>
  </footer>
</template>


<script>
import Lang from '@/components/Lang'
import axios from 'axios'

export default {
  name: 'Footer',
  components: {
    Lang
  },
  data() {
    return {
      versionNumber: ''
    }
  },
  beforeMount() {

    axios.get('https://api.github.com/repos/Rhylionn/personal-website/releases', 
      {
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      })
      .then((response) => {
        this.versionNumber = response.data[0].tag_name
      })
      .catch(() => {
        this.versionNumber = ''
      })

  } 
}
</script>