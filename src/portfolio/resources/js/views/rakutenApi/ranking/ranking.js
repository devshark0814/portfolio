import { $WebAPI } from "@/commonjs/WebAPI";

export default {
    data() {
        return{
            desserts: [],               // テーブル用のデータ
            loading: false,
        }
    },

    mounted() {
        this.callApi();
    },

    methods: {
        // 楽天ランキングAPICall
        callApi: async function () {
            this.loading = true;
            let param = {
                url: "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&applicationId=" + process.env.MIX_BASE_RAKUTEN_APP_ID
            }
            const res = await $WebAPI.postAxios("/api/rakuten/IchibaItem/Ranking",param);
            this.desserts = res.data.Items;
            this.loading = false;
        },
        // 行クリック時に実際のページに別タブで遷移
        jumpPage(url) {
            window.open(url, '_blank')
        }
    }
};
