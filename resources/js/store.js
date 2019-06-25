import router from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        //   localStorage.setItem('accessToken', response.data.token);
        //   commit('loginStop', null);
        //   commit('updateAccessToken', response.data.token);
        //   router.push('/users');
            console.log(response)
        })
        .catch(error => {
        //   commit('loginStop', error.response.data.error);
        //   commit('updateAccessToken', null);
        console.log(error);
        })
      },
      fetchAccessToken({ commit }) {
        commit('updateAccessToken', localStorage.getItem('accessToken'));
      },
      logout({ commit }) {
        localStorage.removeItem('accessToken');
        commit('logout');
        router.push('/login');
      }
    }
  })