<template>
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

<style scoped>
    .text-color{
        color: white;
    }
</style>
