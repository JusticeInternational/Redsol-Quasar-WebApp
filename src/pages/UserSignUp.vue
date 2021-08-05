<template>
    <q-page style-fn="height:1000px">
        <div id="pg-cont" class="row justify-center items-center">
            <div class="column justify-center items-center">
                <div class="row">
                    <q-card square bordered class="q-pa-lg shadow-1">
                        <q-card-section class="column text-center">
                            <h4 class="q-ma-sm">
                                Bienvenido
                            </h4>
                            <p>
                                Por favor completa los campos para continuar con el registro
                            </p>
                        </q-card-section>
                        <q-card-section class="row">
                            <q-form class="q-gutter-md full-width">
                                <q-input square filled v-model="user.firstName" type="text" label="Nombre" />
                                <q-input square filled v-model="user.lastName" type="text" label="Apellido" />
                                <q-input square filled v-model="user.email" type="email" label="Correo" />
                                
                                <q-input v-model="user.pass" square filled :type="isPassHidden ? 'password' : 'text'" label="Contrasena">
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
                            <q-checkbox color="blue" v-model="terms" label="He leido y acepto los Terminos y condiciones" />
                            <q-checkbox color="blue" v-model="policy" label="Entiendo y aceptop las Politicas de privacidad" />
                        </q-card-section>

                        <q-card-section class="column">
                            <q-btn color="black">
                                Continuar
                            </q-btn>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>

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
            isPassHidden: ref(true)
        }

    }

}
</script>

<style scoped>
</style>