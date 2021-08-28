<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :loading="loading"
            loading-text="ロード中・・・"
            no-data-text="データ無し"
            @click:row="clickRow"
            :footer-props="{ 'items-per-page-options': [50, 100, 150, -1] }"
            fixed-header
            height="780px"
        >
        </v-data-table>
    </div>
</template>
<script src="./genre.js"></script>