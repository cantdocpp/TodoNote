import Vue from 'vue'
import router from './router'
import store from './store'

//Import and install the VueRouter plugin with Vue.use()
Vue.use(router)

import App from './views/App'


const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store
});