import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home'
import TodoList from './views/TodoList'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

const router = new Router({
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
})

router.beforeEach((to, from, next) => {
    store.dispatch('fetchAccessToken');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        console.log(store.state.accessToken)
        if (!store.state.accessToken) {
            next('/login')
        }
    }

    if (to.fullPath === '/login' || to.fullPath === '/register') {
        if (store.state.accessToken) {
            next('/');
        }
    }
    next()
})

export default router