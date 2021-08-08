<template>
    <q-layout view="hHh lpR fFf">

        <q-header bordered class="bg-primary text-black" height-hint="98">
            <q-toolbar>
                <q-toolbar-title class="text-weight-bold">
                    <q-avatar class="q-mx-sm">
                        <img src="~assets/imgs/vectorSun.png" alt="logo">
                    </q-avatar>
                        Red Sol
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs align="center">
                <q-route-tab label="User" />
                <q-route-tab label="Org" />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>