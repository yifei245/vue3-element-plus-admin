import { h, resolveComponent } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
const setting = {
  label: "操作",
  width: 120,
  component: (col) => {
    return {
      render: () => {
        const btn = resolveComponent("el-button")
        const btns = [
          h(
            btn,
            {
              type: "text",
              size: "mini",
              onClick: () => {
                view(col)
              }
            },
            { default: () => "查看" }
          ),
          h(
            btn,
            {
              type: "text",
              size: "mini",
              style: {
                "margin-left": "10px",
                color: "#F56C6C"
              },
              onClick: () => {
                del()
              }
            },
            { default: () => "删除" }
          )
        ]
        return h("div", {}, { default: () => btns })
      }
    }
  }
}

function del(){
  ElMessageBox("确定删除?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    ElMessage({
      type: "success",
      message: "删除成功!"
    });
  })
}

function view(){
  ElMessage({
    type: "success",
    message: "view"
  });
}

export default setting
