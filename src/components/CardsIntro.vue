<template>
  
        <!-- <h2>Write here: </h2> -->
        <!-- here is where your 3 cards(carosel will be) -->
  <div>
    <div class="q-pa-md">

    <div class="row items-center q-mb-md">
    
    </div> 

    <q-carousel
      v-model="slide"
      swipeable
      animated
      :padding="padding"
      :arrows="arrows"
      :navigation="navigation"
      :navigation-position="navPos"
      height="300px"
      class="bg-blue text-black rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <!-- <q-icon name="live_tv" size="56px" /> --> 
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <!-- <q-icon name="layers" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <!-- <q-icon name="terrain" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

    </div>
</template>

<script>
// export default {
    // setup(){
//         // Sandra, here is where the JS code goes for developing the swiping of the cards
//     }
// }

import { ref, watch } from 'vue'

export default {
  setup () {
    const navPos = ref('bottom')
    const vertical = ref(false)

    watch(vertical, val => {
      navPos.value = val === true
        ? 'right'
        : 'bottom'
    })

    return {
      padding: ref(true),
      vertical,
      arrows: ref(true),
      navigation: ref(true),

      navPos,
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],

      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>


<style>

</style>