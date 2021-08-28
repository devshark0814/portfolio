<template>
    <v-card class="mx-auto navimenu" width="300" height="100%">
        <v-list>
            <v-list-item @click="clickHome">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group :value="true" prepend-icon="mdi-api">
                <template v-slot:activator>
                    <v-list-item-title>サンプルAPI</v-list-item-title>
                </template>

                <v-list-group :value="true" no-action sub-group>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                <v-icon>mdi-store</v-icon>
                                <span class="ml-3">楽天</span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(rakuten, i) in rakutens"
                        :key="i"
                        link
                        :to="rakuten.link"
                    >
                        <v-list-item-title v-text="rakuten.title"></v-list-item-title>

                        <v-list-item-icon>
                            <v-icon v-text="rakuten.icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
            </v-list-group>

            <v-list-item @click="clickKanban">
                <v-list-item-icon>
                    <v-icon>mdi-view-week</v-icon>
                </v-list-item-icon>

                <v-list-item-title>かんばん</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script src="./menu.js"></script>
<style>
.navimenu *{
    font-size: 14px;
}
</style>