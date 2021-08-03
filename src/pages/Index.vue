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
</template>

<script>
import { defineComponent } from 'vue';

import IntroCards from 'src/components/CardsIntro.vue'


export default defineComponent({
    name: 'PageIndex',
    components:{
        IntroCards,
    }
})
</script>

<style scoped>
    .text-color{
        color: white;
    }
</style>
