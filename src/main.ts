import Vue from 'vue';

import { registerSW } from 'virtual:pwa-register';

registerSW();

import App from './App.vue';

new Vue({
    render: h => h(App),
}).$mount('#app');