<template>
    <div
        class="column items-center">
        <!-- FIRST CARD  -->
        <!-- 
            N.B. this section will disapear if the device is smaller then xs
         -->
        <q-cards
            v-if="$q.screen.gt.xs"
            class="q-ma-md row wrap items-center q-pa-xs shadow-1">

            <q-card-section 
                class="col-4 row justify-center">
                <q-img
                    style="max-width: 300px"
                    fit="contain"
                    src="~/assets/imgs/vectorSun.png" />
            </q-card-section>

            <q-separator 
                class="q-my-lg" 
                vertical />

            <q-card-section 
                class="col">
                <h4 class="q-my-none">
                    Encuentra los recursos de apoyo disponibles en tu comunidad
                </h4>
                <text-subtitle1 class="q-mt-sm">La aplicación Red Sol  te permite hacer búsquedas geolocalizadas. Podrás seleccionar los recursos de acuerdo a las categorías de los proveedores de servicios comunitarios: Agua y Comida, Refugio, salud, educacion, trabajo, legal, etc.</text-subtitle1>
                <h5 class="q-ma-sm">Bienvenido, registrate ya!</h5>
            </q-card-section>
        </q-cards>

        <!-- 
            N.B. This section will appear only if on phone
         -->
        <q-cards
            v-if="$q.screen.lt.sm"
            class="q-ma-md column items-center q-pa-xs shadow-1">

            <q-card-section>
                <h5 class="q-my-none">
                    Encuentra los recursos de apoyo disponibles en tu comunidad
                </h5>
            </q-card-section>

            <q-card-section 
                class="row-6 justify-center">
                <q-img
                    width="200px"
                    src="~/assets/imgs/vectorSun.png" />
            </q-card-section>

            <q-card-section 
                class="row">
                
                <p class="q-mt-sm">La aplicación Red Sol  te permite hacer búsquedas geolocalizadas. Podrás seleccionar los recursos de acuerdo a las categorías de los proveedores de servicios comunitarios: Agua y Comida, Refugio, salud, educacion, trabajo, legal, etc.</p>
                <h6 class="q-ma-sm">Bienvenido, registrate ya!</h6>
            </q-card-section>
        </q-cards>

        <!-- SECOND  -->
        <q-cards
            id="second-card"
            bordered
            class="q-ma-md row wrap shadow-1 items-center">

            <q-card-section class="col text-right q-pa-none">
                <h3
                    class=" q-ma-sm rounded-borders text-white">
                    Busca los recursos de apoyo
                    mas cercanos a ti o en una 
                    ciudad en particular.
                </h3>
            </q-card-section>

            <q-card-sectoin
                class="gt-xs col-4 q-ma-none q-mb-xs text-right">
                <q-img style="max-width: 300px" alt="Map" fit="fill" src="~/assets/imgs/map.png"/>
            </q-card-sectoin>
        </q-cards>

        <!-- THIRD  -->
        <!-- 
            N.B. this section will disapear if the device is smaller then xs
            HORIZONTAL SECTION
         -->
        <q-cards
            class="gt-xs q-ma-md row wrap items-center shadow-1">
            <q-card-section class="col">
                <h4 class="q-ma-sm text-left">Somos Voluntarios</h4>
            </q-card-section>
            <q-separator class="q-my-lg" vertical />

            <q-card-section
                
                class="col q-pa-none">
                <q-img class="rounded-borders" height="60%" fit="contain" src="~/assets/imgs/volunteer.png"/>
            </q-card-section>

            <q-separator class="q-my-lg" vertical />
            <q-card-section class="col">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius justo at dui dictum tristique. Sed eget ante porta, congue lectus ac, placerat sapien. Proin laoreet sagittis nisl eget pulvinar.
                </p>
            </q-card-section>
        </q-cards>
        <!-- 
            N.B. This section will appear if the device is lager then sm
            VERTICAL SECTION
         -->
        <q-cards
            class="lt-sm q-ma-md col wrap items-center text-center shadow-1">
            <q-card-section class="row">
                <h4 class="q-ma-xs">Somos Voluntarios</h4>
            </q-card-section>

            <q-card-section
                class="row q-pa-none">
                <q-img class="q-ma-none" fit="contain" src="~/assets/imgs/volunteer.png"/>
            </q-card-section>

            <q-card-section class="col">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius justo at dui dictum tristique. Sed eget ante porta, congue lectus ac, placerat sapien. Proin laoreet sagittis nisl eget pulvinar.
                </p>
            </q-card-section>
        </q-cards>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
    
    components:{
    },

    setup(){
        const $q = useQuasar();


    }
}
</script>

<style>
    #second-card{
        background: #5282F0;
    }
</style>