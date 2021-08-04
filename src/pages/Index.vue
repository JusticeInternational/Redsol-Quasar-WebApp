<template>
  <q-avatar>
    <img src="~assets/logo.jpg" alt="logo">
  </q-avatar>
  <nav-bar/> 
  <intro-cards/> 

</template>

<script>
import { defineComponent } from 'vue';

import introCards from 'src/components/CardsIntro.vue'
import navBar from 'src/components/NavigationBar.vue'

export default defineComponent({
    name: 'PageIndex',
    components:{
        introCards,
        navBar
    }
})
</script>
