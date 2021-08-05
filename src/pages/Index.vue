<template>
    <q-page>
        <Intro-cards/> 
    </q-page>
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
