<template>
    <q-page 
        class="q-pa-sm text-center row justify-center">
        <Intro/> 
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';

// import IntroCards from 'src/components/CardsIntro.vue'
import Intro from 'src/components/Intro.vue'

export default defineComponent({
    name: 'PageIndex',

    components:{
        // IntroCards,
        Intro,
    }
})
</script>

<style scoped>
    .text-color{
        color: black;
    }
</style>
