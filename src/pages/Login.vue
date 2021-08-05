<template>
    <!-- page container This is neccessary -->
    <q-page class="row justify-center items-center">
        <div class="column">
            <div class="row">
                <!-- login card -->
                <q-card square bordered class="q-pa-xs shadow-1">
                    <!-- logo  -->
                    <q-card-section class="row justify-center">
                        <img src="~/assets/imgs/loginLogo.png" alt="Logo" >
                    </q-card-section>
                    <!-- email & password  -->
                    <q-card-section>
                        <q-form class="q-gutter-md">
                            <!-- email  -->
                            <q-input square filled v-model="email" type="email" label="email" :rules="[val => emailValidation(val) || 'Not valid email']" lazy-rules/>

                            <q-input v-model="password" square filled :type="isPwd ? 'password' : 'text'" label="Password">
                                <template v-slot:append>
                                    <q-icon
                                        :name="isPwd ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer"
                                        @click="isPwd = !isPwd"
                                    />
                                </template>
                            </q-input>
                        </q-form>
                    </q-card-section>
                    <!-- login button  -->
                    <q-card-actions class="q-px-md">
                        <q-btn unelevated color="black" class="full-width" label="Login" />
                    </q-card-actions>

                    <q-separator class="q-my-xs q-mx-lg"/>

                    <!-- signup instead  -->
                    <q-card-section class="text-center q-pa-none">
                        <q-btn :to="{name: 'signup'}" flat color="black" label="Registrarme" :outline="false"/>
                    </q-card-section>

                    <!-- change passwod  -->
                    <q-card-section class="text-center q-pa-none">
                        <q-btn flat color="black" label="Reestablecer contrasena" :outline="false"/>
                    </q-card-section>

                    <q-separator class="q-my-xs q-mx-lg"/>

                    <!-- sign up with googe or facebook  -->
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
</template>

<script>
import {ref} from 'vue'

import emailValidation from 'components/emailValidation.js'


export default {
    setup(){
        const email = ref("")
        const password = ref("")
        const isPwd = ref(true)


        return{
            email, password, isPwd, emailValidation
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