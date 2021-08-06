<template>
    <q-layout view="hHh LpR fFf">

        <q-header bordered class="bg-primary text-black" height-hint="98">
            <q-toolbar>
                <q-toolbar-title class="text-weight-bold">
                <q-avatar class="q-mx-sm">
                    <img src="~assets/imgs/vectorSun.png" alt="logo">
                </q-avatar>
                    Red Sol
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs
                v-if="!leftDrawerOpen"
                align="center"
                active-color="blue-5">
                <q-route-tab icon="person" class="text-black" :to="{name:'usuario'}" label="Usuario" />
                
                <q-route-tab icon="corporate_fare" class="text-black" :to="{name:'organization'}" label="Osuario" />
            </q-tabs>
        </q-header>

        <q-drawer
            :width="250"
            v-model="leftDrawerOpen"
            side="left"
            behavior="desktop"
            bordered
            no-swipe-close>
        <!-- drawer content -->
            <q-list
                separator>
                <q-item
                    clickable
                    v-ripple
                    :to="{name:'usuario'}"
                    active-class="bg-blue-5 text-white">
                    <q-item-section avatar>
                        <q-icon name="person" />
                    </q-item-section>
                    <q-item-section class="text-lg">
                        Usuario
                    </q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :to="{name:'organization'}"
                    active-class="bg-blue-5 text-white">
                    <q-item-section avatar>
                        <q-icon name="corporate_fare" />
                    </q-item-section>
                    <q-item-section class="text-lg">
                        Organization
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script>
import { ref, onUpdated } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(true)

    onUpdated(()=>setLayout)

    function setLayout(){
        if(window.innerWidth >= 600)
            leftDrawerOpen.value = true
        else leftDrawerOpen.value = false
    }
    setLayout()

    return {
      leftDrawerOpen,
      setLayout,
    }
  }
}
</script>