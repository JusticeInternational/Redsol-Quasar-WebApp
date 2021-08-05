<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <q-pqge v-if="!selected">
                <h3>Where do you want to sign up???</h3>

                <router-link :to="{name: 'usuario'}">
                    <q-btn color="black" @click="whenSelected" >
                        user
                    </q-btn>
                </router-link>
                
            </q-pqge>

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