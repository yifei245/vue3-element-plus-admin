import { h } from "vue";
const tableInit = [
  {
    prop: "id",
    label: "ID",
    width: 80,
  },
  {
    label: "标题",
    prop: "title"
  },
  {
    label: "姓名",
    component: (col) => {
      return {
        render: () => {
          return h("div", {},  {default: () =>col.name})
        }
      }
    }
  },
]
export default tableInit