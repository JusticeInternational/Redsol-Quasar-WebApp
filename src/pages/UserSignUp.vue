<template>
    <q-page>
        <div class="q-pa-md column justify-center items-center">
            <div class="row">
                <q-card
                    square
                    bordered
                    class="q-pa-xs shadow-1">
                    <q-card-section
                        class="column text-center">
                        <h4 class="q-ma-sm">
                            Bienvenido
                        </h4>
                        <p>
                            Por favor completa los campos para continuar con el registro
                        </p>
                    </q-card-section>
                    <q-card-section class="row">
                        <q-form
                            class="q-gutter-md full-width">
                            <!-- FIRST NAME  -->
                            <q-input
                                square
                                filled
                                v-model="user.firstName"
                                type="text"
                                label="Nombre" />
                            <!-- LAST NAME  -->
                            <q-input
                                square
                                filled
                                v-model="user.lastName"
                                type="text"
                                label="Apellido" />

                            <!-- EMAIL  -->
                            <q-input
                                square
                                filled
                                v-model="user.email"
                                type="email"
                                label="Correo"
                                :rules="[val => emailValidation(val) || 'This is not a valid email']"
                                lazy-rules />    

                            <!-- PASSWORD  -->
                            <q-input 
                                v-model="user.pass" 
                                square filled :type="isPassHidden ? 'password' : 'text'" 
                                label="Contrasena"
                                :rules="[val => val.length > 5 || 'Your password is too short']" 
                                lazy-rules
                            >
                                <template v-slot:append>
                                    <q-icon
                                        :name="isPassHidden ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer"
                                        @click="isPassHidden = !isPassHidden"
                                    />
                                </template>
                            </q-input>
                            
                        </q-form>
                    </q-card-section>
                    <q-card-section class="column">
                        <q-checkbox
                            color="blue"
                            v-model="terms"
                            label="He leido y acepto los Terminos y condiciones" />
                        <q-checkbox
                            color="blue"
                            v-model="policy"
                            label="Entiendo y aceptop las Politicas de privacidad" />
                    </q-card-section>

                    <q-card-section class="column">
                        <q-btn color="black">
                            Continuar
                        </q-btn>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
import emailValidation from 'components/emailValidation.js'

import {ref} from 'vue'

export default {
    setup(){

        const user = ref({
            email: '', 
            firstName: '', 
            lastName: '', 
            pass: ''
        })
        


            
        return{
            user,
            policy: ref(false),
            terms: ref(false),
            isPassHidden: ref(true),
            emailValidation,
        }

    }

}
</script>

<style scoped>
</style>