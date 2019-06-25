import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

//Import and install the VueRouter plugin with Vue.use()
Vue.use(VueRouter)

import App from './views/App'
import Home from './views/Home'
import TodoList from './component/TodoList'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

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
            path: '/register',
            name: 'register',
            component: Register
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