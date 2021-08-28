import { $WebAPI } from "@/commonjs/WebAPI";

export default {
    data() {
        return{
            genreId: 0,
            headers : [
                { text: "ジャンルID" , value: 'genreId', align: 'left', class: "rank_header"},
                { text: "ジャンル名称" , value: 'genreName', align: 'left', class: "rank_header"},
            ],
            desserts : [],
            loading : false,
        }
    },

    mounted() {
        this.callApi();
    },

    methods: {
        // 楽天ジャンルAPICall
        callApi: async function () {
            this.desserts = [];
            this.loading = true;
            let param = {
                url: "https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222?format=json&applicationId=" + process.env.MIX_BASE_RAKUTEN_APP_ID,
                genreId: this.genreId
            }
            const res = await $WebAPI.postAxios("/api/rakuten/IchibaGenre/Genre",param);
            this.desserts = res.data;
            this.loading = false;
        },
        // 行クリックの場合、さらにクリックされたジャンルIDで再検索
        clickRow(row) {
            this.genreId = row.genreId;
            this.callApi();
        }
    }
};
