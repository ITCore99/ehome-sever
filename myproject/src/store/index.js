import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const store=new Vuex.Store({
   state:{
     userInfo:"",
     title:"0",
   },
   mutations:{
     INITUSERINFO(state,payload)
     {
       this.state.userInfo=payload;
     },
     CHANGETITLE(state,payload)
     {
       this.state.title=payload;
     }
   },
  plugins:[createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },
  })]
});
export default  store;