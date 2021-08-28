<template>
    <div>
        <template v-if="loading">
            <loading-component />
        </template>
        <v-simple-table v-else class="sticky_table" fixed-header height="830px">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center rank_header" style="width:7%">
                            ランク
                        </th>
                        <th class="text-left rank_header">
                            店舗名
                        </th>
                        <th class="text-left rank_header">
                            商品名
                        </th>
                        <th class="text-left rank_header">
                            商品画像
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="obj in desserts"
                    :key="obj.name"
                    @click="jumpPage(obj.Item.itemUrl)"
                    >
                        <td class="text-center">{{ obj.Item.rank }}</td>
                        <td>{{ obj.Item.shopName }}</td>
                        <td>{{ obj.Item.itemName }}</td>
                        <td>
                            <v-img max-height="128" max-width="128" :src="obj.Item.mediumImageUrls[0].imageUrl">
                            </v-img>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script src="./ranking.js"></script>
<style>
.rank_header {
    font-size: 15px !important;
    background-color: #619dff !important;
    color: #FFFFFF !important;
}
</style>