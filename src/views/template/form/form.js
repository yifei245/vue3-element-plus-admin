
import rules from './rules'
import _ from 'lodash'

const ruleForm = {
  title: '123',
  number:null,
  type: null,
  select:null,
  pwd:null
}
const formCopy = _.cloneDeep(ruleForm)

const formInit = [
  {
    label:'单选',
    prop:'type',
    rules: rules.type,
    view: {
      bindKey:'type',
      defaultValue: ruleForm.type,
      dataArr:[{lable:1,value:'是'},{lable:2,value:'否'},{lable:3,value:'好'}],
      type:'radio',
    }
  },{
    label:'密码',
    prop:'pwd',
    rules: rules.pwd,
    view: {
      bindKey:'pwd',
      defaultValue: ruleForm.pwd,
      placeholder:'秘密密码',
      showPassword: true,
      clearable: true,
      type:'input',
    }
  },{
    label:'标题',
    prop:'title',
    rules: rules.title,
    view: {
      bindKey:'title',
      defaultValue: ruleForm.title,
      placeholder:'秘密密码',
      clearable: true,
      type:'textarea',
    }
  },{
    label:'数字input',
    prop:'number',
    rules: rules.number,
    view: {
      bindKey:'number',
      defaultValue: ruleForm.number,
      min:0,
      step:1,
      precision:2,
      type:'input-number',
      controlsPosition:'right',
      style:'width:50%'
    }
  },{
    label:'下拉单选',
    prop:'select',
    rules: rules.select,
    view: {
      bindKey:'select',
      defaultValue: ruleForm.select,
      dataArr:[{lable:1,value:'是'}],
      type:'select',
      clearable:true,
      // multiple:true,
      // 'collapse-tags':true
    }
  },{
    label:'上传',
    prop:'uploadImg',
    rules: rules.uploadImg,
    view: {
      bindKey:'uploadImg',
      defaultValue: [],
      type:'file'
    }
  },{
    label:'富文本',
    prop:'editor',
    view: {
      bindKey:'editor',
      defaultValue: ruleForm.editor,
      type:'editor',
      
    }
  }
]

export {ruleForm, formInit, formCopy}