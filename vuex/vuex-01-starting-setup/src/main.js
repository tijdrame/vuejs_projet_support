import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLogin: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    login(state) {
      state.isLogin = true;
      console.log(state.isLogin);
    },
    logout(state) {
      state.isLogin = false;
      console.log(state.isLogin);
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    loginAction(context) {
      context.commit('login');
    },
    logoutAction(context) {
      context.commit('logout');
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsLogin(state) {
      return state.isLogin;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
