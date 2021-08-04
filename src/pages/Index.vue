<template>
    <q-layout container style="height: 100vh" class="shadow-3">
        <q-header elevated class="bg-white q-pa-xs">
            <q-toolbar class="text-primary ">
                <div style="width: 100vw" class="row justify-around">
                    
                    <!-- logo with avatar -->
                    <q-toolbar-title class="text-color " style="max-width: 150px;">
                        <q-avatar>
                            <img src="~assets/imgs/vectorSun.png" alt="logo">
                        </q-avatar>
                        RedSol
                    </q-toolbar-title>
                    <q-space style="max-width: 60px"></q-space>
                    <q-btn color="black"><router-link :to="{name:'login'}">Login</router-link></q-btn>    
                </div>
                
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
        color: black;
    }
</style>
