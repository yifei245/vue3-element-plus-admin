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
    <chart
      :chart-data="lineChartData1"
    />
    <chart
      :chart-data="lineChartData"
    />
    <chart
      :chart-data="lineChartData2"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import chart from "@/components/echarts/chart.vue";
export default {
  name: "Home",
  components: {
    chart,
  },
  data(){
    return {
      lineChartData :  {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    },
    lineChartData1:{
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
},
lineChartData2 : {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 40, name: 'rose 1'},
                {value: 33, name: 'rose 2'},
                {value: 28, name: 'rose 3'},
                {value: 22, name: 'rose 4'},
                {value: 20, name: 'rose 5'},
                {value: 15, name: 'rose 6'},
                {value: 12, name: 'rose 7'},
                {value: 10, name: 'rose 8'}
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                {value: 30, name: 'rose 1'},
                {value: 28, name: 'rose 2'},
                {value: 26, name: 'rose 3'},
                {value: 24, name: 'rose 4'},
                {value: 22, name: 'rose 5'},
                {value: 20, name: 'rose 6'},
                {value: 18, name: 'rose 7'},
                {value: 16, name: 'rose 8'}
            ]
        }
    ]
}
    }
  },
  setup() {
    const store = useStore();
    store.commit("save", { loading: false })
  },
};
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .box-card {
    width: 500px;
  }
}
</style>
