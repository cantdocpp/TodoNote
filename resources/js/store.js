import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: null,
        loggingIn: false,
        loginError: null
    },

    mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    },

    actions: {
        doLogin({ commit }, loginData) {
            commit('loginStart');
            console.log(loginData)

            axios.post('http://localhost:8000/api/login', loginData)
                .then(response => {
                    console.log(response)
                    let accessToken = response.data.jwt;
                    document.cookie = 'jwt_access_token=' + accessToken;
                    commit('loginStop', null);
                    commit('updateAccessToken', accessToken);
                    router.push({ path: '/' })
                })
                .catch(error => {
                    // commit('loginStop', error.response.data.error);
                    console.log(error)
                    commit('updateAccessToken', null);
                    console.log(error.response);
                })
        },

        fetchAccessToken({ commit }) {
            let arrayCookie = document.cookie.split(';');
            let jwtCookieProperties = arrayCookie.find(function(element) {
                return element = 'jwt_access_token'
            })
            if (arrayCookie[0].includes('jwt_access_token')) {
                let accessToken = jwtCookieProperties.split('=')[0];
                commit('updateAccessToken', accessToken);
            }
        },

        logout({ commit }) {
            document.cookie = 'jwt_access_token=;'
            commit('logout');
            router.push('/login');
        }
    }
})