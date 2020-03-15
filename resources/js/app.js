/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.Vue = require("vue");

import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import ApolloClient from "apollo-boost";

require("./bootstrap");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: "http://127.0.0.1/graphql"
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

// Vue.component(
//     "example-component",
//     require("./components/home.vue").default
// );

const routes = [
    { path: "/", component: require("./components/Home.vue").default },
    { path: "/books/add", component: require("./components/AddBook.vue").default },
    { path: "/books/:id", component: require("./components/Book.vue").default },
    { path: "/books/:id/edit", component: require("./components/EditBook.vue").default },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    // inject apolloProvider here like vue-router or vuex
    apolloProvider,
    router
});
