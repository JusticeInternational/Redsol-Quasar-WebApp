<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <q-page class="window-height window-width row justify-center items-center">
                <div class="column">
                    <div class="row">
                        <q-card square bordered class="q-pa-lg shadow-1">
                            <q-card-section class="row justify-center">
                                <img src="~/assets/imgs/loginLogo.png" alt="Logo" >
                            </q-card-section>
                            <q-card-section>
                                <q-form class="q-gutter-md">
                                <q-input square filled clearable v-model="email" type="email" label="email" />
                                <q-input square filled clearable v-model="password" type="password" label="password" />
                                </q-form>
                            </q-card-section>
                            <q-card-actions class="q-px-md">
                                <q-btn unelevated color="black" class="full-width" label="Login" />
                            </q-card-actions>

                            <q-separator class="q-my-xs"/>

                            <q-card-section class="text-center q-pa-none">
                                <!-- add link to registration page "router-link"-->
                                
                                <router-link :to="{name: 'signup'}"><p class="text-blue-6">Registrarme</p></router-link>
                            </q-card-section>
                            <q-card-section class="text-center q-pa-none">
                                <!-- add link to registration page "router-link"-->
                                <p class="text-blue-6">Reestablecer contrasena</p>
                            </q-card-section>

                            <q-separator class="q-my-xs"/>

                            <q-card-section class="row justify-evenly">
                                <q-button>
                                    <q-avatar>
                                        <img src="~/assets/imgs/google-logo.png" alt="Google" >
                                    </q-avatar>
                                </q-button>
                                <q-button>
                                    <q-avatar>
                                        <img src="~/assets/imgs/Facebook-logo.png" alt="Facebook" >
                                    </q-avatar>
                                </q-button>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const email = ref("")
        const password = ref("")


        return{
            email, password
        }
    }
}
</script>

<style>
    .q-card{
        width: 360px;
    }
    @media screen and (max-width: 365px) {
        .q-card{
            width: 300px;
        }
    }

</style>