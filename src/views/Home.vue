<template>
  <Transition name="fade" appear>
  <main class="w-11/12 sm:w-1/2 xl:w-1/3 mx-auto my-8">
    <header>
      <h1 class="font-black text-5xl text-center sm:text-left">{{ $t('header.title') }} <fa icon="mug-hot" size="xs" class="ml-4"/></h1>
      <p class="mt-12 text-lg text-center sm:text-left">{{ $t('header.aboutme') }}</p>
      <div class="my-8 flex justify-center sm:justify-start">
        <a class="bg-slate-900 py-3 px-4 rounded-md font-bold" href="static/resume.pdf" target="_blank">{{ $t('header.dl-resume') }}</a>
      </div>
      <div class="flex justify-center gap-4 sm:justify-start">
        <a href="https://github.com/Rhylionn" target="_blank"><img class="h-8" src="../assets/images/github-icon.svg"/></a> 
        <a href="#" target="_blank"><img class="h-8" src="../assets/images/htb-icon.svg"/></a> 
        <a href="https://www.root-me.org/rhylionn" target="_blank"><img class="h-8" src="../assets/images/rootme-icon.svg" alt="Rootme account"></a>
        <a href="https://www.linkedin.com/in/thomas-bernard-esaip/" target="_blank"><img class="h-8" src="../assets/images/linkedin-icon.svg" alt="LinkedIn account"></a>
      </div>
    </header>
    <section id="myWork">
      <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left"><fa icon="folder-open" size="xs" class="mr-4"/>{{ $t('myWork.heading') }}</h2>
      <div class="flex flex-col">
        <Project v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </section>
    <section id="education">
      <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left"><fa icon="route" size="xs" class="mr-4"/>{{ $t('education.heading') }}</h2>
      <div>
        <Education v-for="(education, index) in educations" :key="index" :school="education"/>
      </div>
    </section>
    <section id="technologies">
      <h2 class="font-bold text-4xl mt-14 mb-8 text-center sm:text-left"><fa :icon="['fab', 'buffer']" size="xs" class="mr-4"/>Technologies</h2>
      <div class="grid gap-1 grid-cols-2 sm:grid-cols-4">
        <Technology :icon="['fab', 'fedora']" name="Fedora"/>
        <Technology :icon="['fab', 'windows']" name="Windows"/>
        <Technology :icon="['fab', 'github']" name="Github"/>
        <Technology :icon="['fab', 'html5']" name="HTML"/>
        <Technology :icon="['fab', 'css3']" name="CSS"/>
        <Technology :icon="['fab', 'js-square']" name="Javascript"/>
        <Technology :icon="['fab', 'node-js']" name="NodeJS"/>
        <Technology :icon="['fab', 'vuejs']" name="VueJS"/>
        <Technology :icon="['fab', 'php']" name="PHP"/>
        <Technology :icon="['fab', 'java']" name="Java"/>
        <Technology :icon="['fab', 'python']" name="Python"/>
        <Technology :icon="['fab', 'raspberry-pi']" name="Raspberry"/>
      </div>
    </section>
  </main>
  </Transition>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import Education from '@/components/Education'
import Technology from '@/components/Technology'

export default {

  name: 'Home',
  components: {
    Project,
    Education,
    Technology,
    Footer
  },
  data() {
    return {
      educations: [
      ],
      projects: [

      ]
    }
  },
  created(){
    this.educations = [
      {
        id: 0,
        img: 'esaip-logo.png'
      },
      {
        id: 1,
        img: 'via-logo.svg',
      }
    ]

    this.projects = [
      {
        id: 0,
        ghLink: 'https://github.com/Rhylionn',
        technologies: ['java']
      },
      {
        id: 1,
        ghLink: 'https://github.com/Rhylionn',
        technologies: ['python']
      },
      {
        id: 2,
        technologies: ['php', 'html5', 'css3', 'js-square']
      },
      {
        id: 3,
        technologies: ['html5', 'css3', 'vuejs']
      }
    ]
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1s ease;
}
</style>
