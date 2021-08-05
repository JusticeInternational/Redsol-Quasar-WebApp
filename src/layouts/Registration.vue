<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container style="height: 100vh" class=" q-py-lg">
            <q-header  reveal>
                <div class="row justify-evenly q-my-md">

                    <h4 style="color:black" class="q-my-sm text-center">Where do you want to sign up???</h4>

                    <q-btn color="black" @click="whenSelected" >
                        <router-link :to="{name: 'usuario'}">
                            usuario
                        </router-link>
                    </q-btn>
                    
                    <q-btn color="black" @click="whenSelected" >
                        <router-link :to="{name: 'organization'}">
                            organization
                        </router-link>
                    </q-btn>
                </div>
            </q-header >

            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>

import {ref} from 'vue'

export default {
    setup(){

        let selected = ref(false)

        function whenSelected(){
            if(!selected.value) selected.value = true
            else selected.value = false
        }

        return{
            selected,
            whenSelected,
        }
    }

}
</script>

<style>

</style>