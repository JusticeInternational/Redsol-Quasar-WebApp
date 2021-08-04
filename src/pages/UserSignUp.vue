<template>
    <q-layout>
        <q-page-container>
            <q-page class="window-height window-width">
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
                                        <q-input square filled v-model="firstName" type="text" label="Nombre" />
                                        <q-input square filled v-model="lastName" type="text" label="Apellido" />
                                        <q-input square filled v-model="email" type="email" label="Correo" />
                                        
                                        <q-input v-model="pass" square filled :type="isPwd ? 'password' : 'text'" label="Contrasena">
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
                                <q-card-section class="column">
                                    <q-checkbox color="blue" v-model="terms" label="He leido y acepto los Terminos y condiciones" />
                                    <q-checkbox color="blue" v-model="policy" label="Entiendo y aceptop las Politicas de privacidad" />
                                </q-card-section>
                            </q-card>
                        </div>
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
        const   email= ref(''), 
                firstName= ref(''),
                lastName= ref(''), 
                pass= ref('');
            


            
        return{
            email,
            firstName,
            lastName,
            pass, 
            policy: ref(false),
            terms: ref(false),
            isPwd: ref(true)
        }

    }

}
</script>

<style scoped>
#pg-cont{
    height: 100%;
}

</style>