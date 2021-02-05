import { createStore } from 'vuex'

export default createStore({
  state: {
    
  },
  mutations: {
    setNavMenuCollapse(state){
      state.navMenuCollapse = !state.navMenuCollapse
    }
  },
  actions: {
  },
  modules: {
  }
})
