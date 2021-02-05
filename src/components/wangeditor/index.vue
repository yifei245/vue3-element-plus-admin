<template>
  <div 
    class="wang-editor" 
    :style="`width:${width}px`"
  >
    <view
      ref="editorElem"
      class="editor"
    />
  </div>
</template>

<script>
import E from 'wangeditor';
import hljs from 'highlight.js'
import API from '@/api/api-config.js'
export default {
  props: {
    width: {
      default: 700,
      type: Number,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let editor = new E(this.$refs.editorElem);
      editor.config.onchange = (html) => {
        this.$emit("editorChange", html);
      };
      // 挂载highlight插件 代码高亮
      editor.highlight = hljs
      // alert
      editor.config.customAlert = function(s, t) {
        switch (t) {
          case "success":
            this.$message.success(s);
            break;
          case "warning":
            this.$message.warning(s)
            break;
          case "error":
            this.$message.error(s)
            break;
          default:
            this.$message(s);
            break;
        }
      };
      // 设置编辑区域高度为 400px
      editor.config.height = 400
      //关闭网络路径图片方式
      editor.config.showLinkImg = false  
      // 上传图片接口
      editor.config.uploadImgServer = API.uploadUrl ;
      // 忽略粘贴内容中的图片
      editor.config.pasteIgnoreImg = true
      // 使用 base64 保存图片
      editor.config.uploadImgShowBase64 = true
      editor.config.uploadFileName = 'file'
      // 不显示的菜单
      editor.config.excludeMenus = [
        "emoticon", // 表情
        "link", // 插入链接
      ]
      //菜单配置
      // editor.config.menus = [
      //   "head", // 标题
      //   "bold", // 粗体
      //   "fontSize", // 字号
      //   "fontName", // 字体
      //   "italic", // 斜体
      //   "underline", // 下划线
      //   "strikeThrough", // 删除线
      //   "foreColor", // 文字颜色
      //   "backColor", // 背景颜色
      //   "list", // 列表
      //   "justify", // 对齐方式
      //   "quote", // 引用
      //   "image", // 插入图片
      //   "table", // 表格
      //   "video", // 插入视频
      //   'code',  // 插入代码
      //   "undo", // 撤销
      //   "redo", // 重复
      //   'indent', // 缩进
      //   'lineHeight', //行高
      //   'todo', // todo
      //   'splitLine', // 分割线
      // ];
      //上传
      editor.config.uploadImgHooks = {
        // 图片上传并返回了结果，想要自己把图片插入到编辑器中
        customInsert: (insertImgFn, result) => {
          insertImgFn(result.data)
        }
      };
      editor.create();
    },
  },
};
</script>
