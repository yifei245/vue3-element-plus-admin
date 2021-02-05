<template>
  <div class="pagination-container">
    <el-pagination
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
 
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 15, 20, 25]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        if (val > 0) {
          this.$emit('update:page', val - 1)
        } else {
          this.$emit('update:page', val)
        }
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
    },
    handleCurrentChange (val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
    }
  }
}
</script>
 
<style scoped>
  .pagination-container {
    text-align: center;
    margin-top: 30px;
  }
</style>