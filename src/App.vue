<template>
  <router-view />
</template>
<script>
export default {
  created() {
    
  },
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
};
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  margin: 0;
  .iconfont {
    font-size: 16px;
  }
  .el-select__popper.el-popper[role=tooltip]{
    z-index: 999999 !important;
  }
}
</style>
