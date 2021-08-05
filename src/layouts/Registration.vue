<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container class=" q-py-lg">
            <q-header  reveal>
                <div class="row justify-evenly q-my-md">

                    <h4 style="color:black" class="q-my-sm text-center">Where do you want to sign up???</h4>

                    <q-btn :to="{name: 'usuario'}" color="black" @click="whenSelected" >
                        usuario
                    </q-btn>
                    
                    <q-btn :to="{name: 'organization'}" color="black" @click="whenSelected" >
                        organization
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