import Vue from 'vue'
import VueRouter from 'vue-router'

//Import and install the VueRouter plugin with Vue.use()
Vue.use(VueRouter)

import App from './views/App'
import Home from './views/Home'
import TodoList from './component/TodoList'
import Login from './views/Login.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/:section',
            name: 'theTask',
            component: TodoList,
            props: true,
            meta: { requiresAuth: true }
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});