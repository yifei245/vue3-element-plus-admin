
<template>
  <div
    class="navMenu"
    :style="isCollapse?'width:64px':'width:200px'"
  >
    <el-menu
      :default-active="activeMenu"
      class="menu"
      :collapse="isCollapse"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
      hide-timeout="0"
    >
      <menu-item 
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :info="routes"
        :index="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import menuItem from "./menu-item"
export default {
  name: "NavMenu",
  components: { menuItem },
  data() {
    return {
      isCollapse: this.$store.state.navMenuCollapse,
      activeMenu: this.$store.state.activeMenu
    };
  },
  watch:{
    '$store.state.activeMenu': {
      deep:true,
      handler:function(val){
        this.activeMenu = val
      }
    },
    '$store.state.navMenuCollapse': {
      deep:true,
      handler:function(val){
        this.isCollapse = val
      }
    }
  },
  created(){
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {}
}
</script>
<style lang="less" scope>
.navMenu {
  height: 100%;
  overflow: auto;
  background: #000;
  .menu {
    border: none;
  }
}
</style>
