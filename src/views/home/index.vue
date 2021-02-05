<template>
  <div class="home">
    <h3>首页</h3>
    <el-card class="box-card">
      <template #header>
        <div class="clearfix">
          <span>卡片名称</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
          >
            操作按钮
          </el-button>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: 'Home',
  components:{
  },
  setup(){
    const store = useStore()
    store.commit('save',{loading:false})
  }
}
</script>

<style lang="less">
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box-card {
      width: 500px;
    }
  }
</style>
