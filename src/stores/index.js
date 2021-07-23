import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import common from "./common";
import auth from "./auth";
import product from "./product";
import brand from "./brand";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
    auth,
    product,
    brand,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
  // for dev mode only
  strict: process.env.DEV,
});

export default store;
