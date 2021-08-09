<template>
    <q-page class="row wrap justify-evenly items-center text-center text-weight-bold">
        

        
        <router-link :to="{name: 'usuario'}">
            <q-card
                class="column q-ma-md"
                >
                <q-card-section  class="q-py-none">
                    <h5 class="q-my-sm text-weight-bold text-secondary" >
                        Como Usuario
                    </h5>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <q-avatar size="250px" square>
                        <img src="~/assets/imgs/comoUsuario.svg" alt="Como Usuario">
                    </q-avatar>
                </q-card-section>
            </q-card>
        </router-link>

        <router-link :to="{name: 'organization'}">
            <q-card
                class="column q-ma-md"
                >
                <q-card-section  class="q-py-none">
                    <h5 class="q-my-sm text-weight-bold text-secondary">
                        Como Organizacion
                    </h5>
                </q-card-section>
                <q-card-section  class="q-py-none">
                    <q-avatar size="250px" square>
                        <img src="~/assets/imgs/comoOrg.svg" alt="Como Usuario">
                    </q-avatar>
                </q-card-section>
            </q-card>
        </router-link>
    </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>