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
    mobile:"",
    num:''
  },
  mutations: {
    saveToken(state,data){
      state.token=data.token
      state.mobile=data.mobile.substr(0, 3) + '****' + data.mobile.substr(data.mobile.length - 4);
    },
    getnum(state,data){
      state.num=data
      console.log(data)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
