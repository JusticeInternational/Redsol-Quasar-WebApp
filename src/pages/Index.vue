<template>
<<<<<<< HEAD
    <q-layout container style="height: 100vh" class="shadow-2">
        <q-header elevated>
            <q-toolbar class="text-primary">
                <q-toolbar-title class="text-color">
                    RedSol
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <Intro-cards/> 
        </q-page-container>
    </q-layout>
=======
  <q-avatar>
    <img src="~assets/logo.jpg" alt="logo">
  </q-avatar>
  <nav-bar/> 
  <intro-cards/> 

>>>>>>> homeSkeleton
</template>

<script>
import { defineComponent } from 'vue';

<<<<<<< HEAD
import IntroCards from 'src/components/CardsIntro.vue'

=======
import introCards from 'src/components/CardsIntro.vue'
import navBar from 'src/components/NavigationBar.vue'
>>>>>>> homeSkeleton

export default defineComponent({
    name: 'PageIndex',
    components:{
<<<<<<< HEAD
        IntroCards,
=======
        introCards,
        navBar
>>>>>>> homeSkeleton
    }
})
</script>

<style scoped>
    .text-color{
        color: white;
    }
</style>
