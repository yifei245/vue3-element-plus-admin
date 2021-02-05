import { createStore } from 'vuex'
import _ from 'lodash'
export default createStore({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    navMenuCollapse: false,
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565963677968&di=5a10a44c083a65321feae919a0b83898&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F16%2F20150616234003_ZhVX8.jpeg',
    username:null,
    tagsViews:[],
    activeMenu: '',
    loading: false
  },
  mutations: {
    save(state,val){
      Object.assign(state, val)
    },
    setNavMenuCollapse(state){
      state.navMenuCollapse = !state.navMenuCollapse
    },
    setTagsViews(state,payload){
      state.tagsViews.push(payload)
      state.tagsViews = _.uniqBy(state.tagsViews, 'path')
      console.log('tagsViews',state.tagsViews)
    },
    delTagsViews(state,payload){
      state.tagsViews =  _.pullAllBy(state.tagsViews,[payload],'path')
    },
    setActiveMenu(state,payload){
      state.activeMenu = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
