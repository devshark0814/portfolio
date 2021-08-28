<template>
    <div>
        <v-form>
            <v-text-field label="ジャンルID" type="number" v-model="genreId"></v-text-field>
            <v-select
                v-model="age"
                :items="selectItems"
                item-text="text"
                item-value="value"
                label="年代の選択"
                dense
                outlined
            ></v-select>
            <v-radio-group v-model="sex" row>
                <v-radio label="男性" value="1"></v-radio>
                <v-radio label="女性" value="2"></v-radio>
            </v-radio-group>
        </v-form>
        <v-btn color="primary" @click="clickSearchBtn">検索</v-btn>
        <v-btn color="success" @click="clickClearBtn">条件クリア</v-btn>
    </div>
</template>
<script src="./searchRanking.js"></script>