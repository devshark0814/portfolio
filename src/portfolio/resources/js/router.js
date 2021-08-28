import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "./views/dashboard/dashboard.vue";
import About from "./views/about.vue";
import Ranking from "./views/rakutenApi/ranking/ranking.vue";
import SearchRanking from "./views/rakutenApi/searchRanking/searchRanking.vue";
import Genre from "./views/rakutenApi/genre/genre.vue";
import Kanban from "./views/kanban/kanban.vue";


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/ranking",
            name: "Ranking",
            component: Ranking,
        },
        {
            path: "/search_ranking",
            name: "SearchRanking",
            component: SearchRanking,
        },
        {
            path: "/genre",
            name: "Genre",
            component: Genre,
        },
        {
            path: "/kanban",
            name: "Kanban",
            component: Kanban,
        },
    ]
});

export default router;