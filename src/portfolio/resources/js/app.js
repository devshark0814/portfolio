require('./bootstrap');
window.Vue = require('vue').default;
import router from "./router";
import vuetify from '@/plugins/vuetify'

Vue.component('navi-component', require('@/views/navigation/navigation.vue').default);
Vue.component('menu-component', require('@/views/navigation/menu.vue').default);
Vue.component('loading-component', require('@/views/common/loading.vue').default);

const app = new Vue({
    el: '#app',
    router: router,
    vuetify,
});