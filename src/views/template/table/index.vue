<template>
  <div class="template">
    <h3>{{ pageTitle }}</h3>
    <m-table
      v-if="tableData.data.length > 0"
      :table-data="tableData"
      :table-head="tableHead"
      @pageChange="getList"
    />
  </div>
</template>
<script>
import { httpRequest } from "@/api/http";
import MTable from "@/components/m-table/index.vue";
import tableHeadInfo from "./table";
import API from "@/api/api-config.js";
// import { h, resolveComponent } from "vue";
import { initSetting } from "@/utils/index.js";
// import { ElMessage, ElMessageBox } from "element-plus";
import setting from './setting'
export default {
  components: {
    MTable,
  },
  data() {
    return {
      tableData: { data: [] },
      setting: setting,
      tableHead: [],
      listQuery: {
        page: 1,
        size: 10,
      },
    };
  },
  setup() {
    let pageTitle = "列表";
    return {
      pageTitle,
    };
  },
  mounted() {
    this.tableHead = initSetting(tableHeadInfo, this.setting);
    this.getList();
  },
  methods: {
    getList() {
      this.$store.commit("save", { loading: true });
      httpRequest("GET", API.list).then((res) => {
        this.$store.commit("save", { loading: false });
        this.tableData = res;
      });
    },
  },
};
</script>
<style scoped lang="less">

</style>
