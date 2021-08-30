import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})



export default new Vuex.Store({
  state: {
    token:"",
    mobile:""
  },
  mutations: {
    saveToken(state,data){
      state.token=data.token
      // state.mobile=data.mobile
      state.mobile=data.mobile.substr(0, 3) + '****' + data.mobile.substr(data.mobile.length - 4);
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
