<template>
    <v-app>
        <v-navigation-drawer app>
            <menu-component />
        </v-navigation-drawer>

        <v-app-bar app>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer app>
        </v-footer>
    </v-app>
</template>
<style>
.v-application {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
}
</style>