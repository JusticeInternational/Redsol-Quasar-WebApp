<template>
  <intro-cards/> 
</template>

<script>
/*eslint-disable*/
import { defineComponent } from 'vue';

import introCards from 'src/components/CardsIntro.vue'


export default defineComponent({
    name: 'PageIndex',
    components:{
        introCards,
    }
})
</script>
