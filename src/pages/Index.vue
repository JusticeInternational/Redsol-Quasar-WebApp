<template>
    <q-layout container style="height: 100vh" class="shadow-3">
        <!-- header  -->
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

        <!-- body/ main -->
        <q-page-container>
            <Intro-cards/> 
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

import IntroCards from 'src/components/CardsIntro.vue'

export default defineComponent({
    name: 'PageIndex',

    components:{
        IntroCards
    }
})
</script>

<style scoped>
    .text-color{
        color: black;
    }
</style>
