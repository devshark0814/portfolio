export default {
    data() {
        return{
            rakutens: [
                { title: "総合ランキング", icon: "mdi-api", link: "/ranking" },
                { title: "検索ランキング", icon: "mdi-api", link: "/search_ranking" },
                { title: "ジャンル", icon: "mdi-api", link: "/genre" }
            ],
        }
    },

    methods: {
        clickHome() {
            this.$router.push("/dashboard");
        },
        clickKanban() {
            this.$router.push("/kanban");
        },
        clickCanvas() {
            this.$router.push("/canvas");
        },
    }
};
