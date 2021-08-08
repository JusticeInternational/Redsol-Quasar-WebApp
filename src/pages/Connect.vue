<template>
    <q-page class="row justify-center">
        <Login/>
        <Reg/>
    </q-page>
</template>

<script>
import Login from 'components/Login.vue'
import Reg from 'components/SignUpSelector.vue'

export default {
    components:{
        Login, 
        Reg,
    },

}
</script>

<style>

</style>