import Vue from 'vue'
import VueRouter from 'vue-router'

//Import and install the VueRouter plugin with Vue.use()
Vue.use(VueRouter)

import App from './views/App'
import Home from './views/Home'
import TodoList from './component/TodoList'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, 
        {
            path: '/today',
            name: 'theTask',
            component: TodoList,
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});