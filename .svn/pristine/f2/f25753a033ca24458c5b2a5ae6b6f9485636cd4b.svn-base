// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();

import 'normalize.css';
import 'babel-polyfill';

// import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';


const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}
import global from '../lib/global';
import router from '../router/index';
import store from '../store/index';
// import i18n from '../i18n/index';
Vue.prototype.global = global;
const Outer = { template: '<router-view></router-view>' };

Vue.use(VueRouter);


sync(store, router);

const app = new Vue({
    router,
    store,
    // i18n,
    ...Outer
});

app.$mount('#app');
