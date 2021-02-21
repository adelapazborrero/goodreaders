require('./bootstrap');

// window.Vue = require('vue').default;
//
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/App.vue -> <example-component></example-component>
//  */
//
// //const app = document.getElementById('app')
//
// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//
// Vue.component('app', require('./components/App.vue').default);
//
// const app = new Vue({
//     el: '#app',
// });


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Main from './components/views/Index'
import Test from './components/views/Test'
import Endpoints from "./components/views/Endpoints";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
        },
        {
            path: '/endpoints',
            name: 'endpoints',
            component: Endpoints,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
