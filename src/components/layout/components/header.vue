<template>
  <div class="header">
    <i
      :class="isCollapse? 'iconfont iconMENU ':'iconfont iconMENU rotate'"
      @click="rotate"
    />
    <div class="username">
      {{ username }}
    </div>
    <el-dropdown
      class="dropdown"
    >
      <span class="el-dropdown-link">
        <el-link
          :underline="false"
          disabled
        >
          {{ username }}
          <i class="el-icon-arrow-down el-icon--right" />
        </el-link>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            icon="el-icon-user"
            @click="jumpPage('/center')"
          >
            个人中心
          </el-dropdown-item>
          <el-dropdown-item 
            icon="el-icon-switch-button"
            @click="quit"
          >
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <img
      class="avatar"
      :src="avatar"
      fit="cover"
    >
  </div>
</template>

<script>
import { routerPush } from '@/utils'
export default {
  name: 'Header',
  components:{
    
  },
  data(){
    return {
      isCollapse: this.$store.state.navMenuCollapse,
      avatar: this.$store.state.avatar,
      username: this.$store.state.username
    }
  },
  watch:{
    '$store.state.navMenuCollapse'(val) {
      this.isCollapse = val
    }
  },
  methods:{
    rotate(){
      this.$store.commit('setNavMenuCollapse')
    },
    jumpPage(data){
      routerPush(data)
    },
    quit(){
      sessionStorage.setItem('isLogin', false)
      window.location.reload()
      this.jumpPage('login')
    }
  }
}
</script>

<style lang="less">
  .header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconMENU {
      font-size: 45px !important;
      color: #000;
      cursor: pointer;
    }
    .iconMENU:hover {
      box-shadow: 0 0 4px 2px#ccc;
    }
    .rotate{
      transform: rotate(-90deg);
    }
    .username {
      margin-left: 30px;
      font-weight: bold;
      font-size: 18px;
    }
    .dropdown {
      margin-left: auto;
      margin-right: 20px;
    }
    .avatar {
      width: 45px;
      border-radius: 50%;
    }
    .el-dropdown-link {
      cursor: pointer;
    }
    .el-link.is-disabled {
      cursor: pointer;
      
    }
    .el-link.el-link--default.is-disabled {
      color: #409EFF;
    }
  }
</style>
