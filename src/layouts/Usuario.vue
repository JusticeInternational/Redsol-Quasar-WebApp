<template>
    <q-layout view="hHh LpR fFf">

        <q-header
            bordered
            class="bg-primary text-black"
            height-hint="98">
            <q-toolbar>
                <q-btn
                    dense
                    flat
                    round
                    icon="menu"
                    @click="toggleLeftDrawer" />

                <q-toolbar-title class="text-weight-bold">
                <q-avatar class="q-mx-sm">
                    <img src="~assets/imgs/vectorSun.png" alt="logo">
                </q-avatar>
                    Red Sol
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs align="left">
                <!-- REMEMBER TO AD TO PROPERTY TO THE TABS OR WARNING WILL START TO COME UP -->
                <q-route-tab label="Search" />
                <q-route-tab label="Map" />
                <q-route-tab label="List" />
            </q-tabs>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            side="left"
            bordered
            overlay
            :width="250"
            >
            <!-- User info -->
            <div class="q-py-md q-px-xs bg-blue text-center">
                <!-- Profile img -->
                <q-avatar size="60px">
                    <img src="~assets/imgs/vectorSun.png" alt="logo">
                </q-avatar>
                <!-- Name  -->
                <h5 class="q-my-sm">{{user.name}}</h5>
                <!-- email  -->
                <p>{{user.email}}</p>
            </div>

            <q-list class="text-subtitle1" separator>

                <q-item
                    clickable
                    @click="active = 0"
                    :active="active == 0"
                    active-class="text-orange">
                    <q-item-section avatar side>
                        <q-avatar icon="person"/>
                    </q-item-section>
                    <q-item-section >
                        <q-item-label>
                            Profile
                        </q-item-label>
                        <q-item-label caption>
                            Here is your profile
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item
                    @click="active = 1"
                    clickable
                    :active="active == 1"
                    active-class="text-orange">
                    <q-item-section avatar side>
                        <q-avatar icon="qr_code_scanner"/>
                    </q-item-section>
                    <q-item-section >
                        <q-item-label>QRCode</q-item-label>
                        <q-item-label caption>
                            Show your QR code to the Organization
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item
                    @click="active = 2"
                    clickable
                    :active="active == 2"
                    active-class="text-orange">
                    <q-item-section avatar side>
                        <q-avatar icon="badge"/>
                    </q-item-section>
                    <q-item-section >
                        <q-item-label>Targeta</q-item-label>
                        <q-item-label caption>
                            Show your Targeta code to the Organization
                        </q-item-label>
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
import { ref } from 'vue'

export default {
    setup () {
        const leftDrawerOpen = ref(false)
        const user = ref({
            name: "Name Lastname",
            email: "local@email.com",
            id: 123456,
        })

        const active = ref(0);


        return {
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
            user,
            active,
        }
    }
}
</script>