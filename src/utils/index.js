import router from '@/router'
import store from '@/store'

/**
 * @des 跳转路由
 */

 export function routerPush(path) {
  router.options.routes.forEach(v => {
    if(v.children){
      v.children.forEach( i => {
        if(i.path == path){
          store.commit('setTagsViews',i)
        }
      })
    }
  })
  router.push({ path: path})
 }

 /**
 * @des 初始化table 操作列
 *  列表是否有操作列 
 *  否 在最后一行增加操作列
 */

export function initSetting(tableData,setting) {
  let arr = tableData
  if(tableData[ tableData.length-1 ].label != '操作'){
    arr.push(setting)
  }
  return arr
 }