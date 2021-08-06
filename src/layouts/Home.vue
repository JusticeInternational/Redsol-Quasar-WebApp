<template>
    <q-layout view="hHh lpR fFf">
        <!-- header  -->
        <q-header bordered class="bg-white q-pa-xs">
            <q-toolbar class="text-center row justify-around">
                <!-- logo with avatar -->
                <q-toolbar-title class="text-black text-weight-bold" style="max-width: 150px;">
                    <q-avatar>
                        <img src="~assets/imgs/vectorSun.png" alt="logo">
                    </q-avatar>
                    Red Sol
                </q-toolbar-title>
                <q-space style="max-width: 60px"></q-space>
                <q-btn
                    @click="changButton"
                    color="black"
                    :to="{name:button.route}">
                    {{button.name}}
                </q-btn> 
            </q-toolbar> 
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
    setup() {
        const button = ref({
            route: 'login',
            name: 'Login'
        })

        function changButton(){
            if(button.value.route == 'login'){
                button.value = {
                    route: 'home',
                    name: 'Home'
                }
            }
            else{
                button.value = {
                    route: 'login',
                    name: 'Login'
                }
            }
        }
        return{
            button,
            changButton,
        }

    },
}
</script>
