<template>
    <div>
        <div class="height-full q-pa-sm text-center row justify-center">
            <q-carousel
                v-model="slide"
                swipeable
                animated
                :arrows="arrows"
                :navigation="navigation"
                :navigation-position="navPos"
                style="min-height: 630px; max-width: 675px"
                class="bg-blue text-black rounded-borders"
                >

                <!-- Card 1 -->
                <q-carousel-slide style="color: white" name="style" class="column wrap flex-center">
                    <h6 class="q-ma-sm">
                        Encuentra los recursos de apoyo disponibles en tu comunidad
                    </h6>
                    <q-img height="40%" fit="contain" src="~/assets/imgs/vectorSun.png"/>
                    <p class="q-mt-sm">La aplicación Red Sol  te permite hacer búsquedas geolocalizadas. Podrás seleccionar los recursos de acuerdo a las categorías de los proveedores de servicios comunitarios: Agua y Comida, Refugio, salud, educacion, trabajo, legal, etc.</p>
                    <h6 class="q-ma-sm">Bienvenido, registrate ya!</h6>
                </q-carousel-slide>

                <!-- card 2  -->
                <q-carousel-slide style="color: white" name="tv" class="row wrap flex-center">
                    <q-img height="70%" fit="contain"  src="~/assets/imgs/map.png"/>
                    <h6 class="q-ma-sm rounded-borders">
                        Busca los recursos de apoyo
                        mas cercanos a ti o en una 
                        ciudad en particular.
                    </h6>
                </q-carousel-slide>

                <!-- card 3  -->
                <q-carousel-slide style="color: white" name="layers" class="column wrap flex-center">
                    <h5 class="q-ma-sm">Somos Voluntarios</h5>
                    <q-img class="q-ma-sm rounded-borders" height="60%" fit="contain" src="~/assets/imgs/volunteer.png"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius justo at dui dictum tristique. Sed eget ante porta, congue lectus ac, placerat sapien. Proin laoreet sagittis nisl eget pulvinar.
                    </p>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script>
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