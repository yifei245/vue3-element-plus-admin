<template>
  <div class="m-table">
    <el-card class="box-card">
      <el-table
        :data="tableData.data"
        stripe
        :height="height"
        style="width: 100%"
        :max-height="height"
        empty-text="暂无数据"
        size="mini"
      >
        <el-table-column
          align="center"
          v-for="item in tableHead"
          :key="item.id"
          v-bind="item"
        >
          <template #default="scope">
            <span v-if="!item.component">{{ scope.row[item.prop] }}</span>
            <component
              v-if="item.component"
              :is="item.component(scope.row)"
            />
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        v-if="tableData.total > 0"
        :total="tableData.total"
        :page="query.page"
        :limit="query.size"
        @pagination="pageChange"
      />
    </el-card>
  </div>
</template>
<script>
export default {
  props:{
    tableData:{
      type:Object,
      default: ()=>{
        return {
        }
      }
    },
    query:{
      type:Object,
      default: ()=>{
        return {
          page: 1,
          size: 10,
        }
      }
    },
    tableHead:{
      type:Array,
      default: ()=>[]
    },
  },
  
  
  data(){
    return {
      height: window.innerHeight - 300
    }
  },
  watch:{
    height(val){
      this.height = val
      console.log(this.height)
    }
  },
  mounted(){
    window.onresize = () => {
        return (() => {
            window.innerHeight = document.body.innerHeight
            this.height = window.innerHeight - 300
        })()
    }
  },
  methods:{
    pageChange(data){
      this.$emit('pageChange',data)
    }
  }
}
</script>
<style scoped lang="less">
.m-table  {
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>