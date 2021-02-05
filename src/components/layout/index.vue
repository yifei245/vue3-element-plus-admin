<template>
  <div class="layout">
    <el-container style="height:100%;overflow: hidden;">
      <el-header style="padding-left: 10px;box-shadow: #ccc 0 0 6px 0px;z-index:1;">
        <headerMenu />
      </el-header>
      <el-container>
        <el-aside
          width="200"
          style="z-index:2"
        >
          <navMenu />
        </el-aside>
        <el-container :style="`position:relative;height:${mainHeight}px`">
          <tabbar />
          <el-main :style="`padding: 40px 20px;background:#f1f1f1`">
            <page-main />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from "./components/menu/navMenu"
import headerMenu from "./components/header"
import tabbar from './components/tabbar'
import pageMain from './components/page-main'
export default {
  components:{
    navMenu, headerMenu, tabbar, pageMain
  },
  computed:{
    mainHeight() {
      return window.innerHeight - 60
    }
  }
}
</script>
<style lang="less" scope>
  .layout {
    height: 100%;
  }
</style>