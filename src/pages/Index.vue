<!--home-->
<template>
  <h2>Helooo</h2>
  <!-- <router-link to = '/login'>login</router-link> -->

  <!-- good practice if we need to change the name in our routes.js file. Here we are only changing the name ones and it will work everywhere else too!-->
  <router-link :to="{name:'login'}">login</router-link> 
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
