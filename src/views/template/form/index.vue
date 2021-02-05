<template>
  <div class="form">
    <el-form
      v-if="formInit.length > 0"
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width:50%"
      :rules="rules"
    >
      <el-form-item
        v-for="item in formInit"
        :key="item"
        v-bind="item"
        :rules="item.rules"
      >
        <M-Form
          @handleChange="handleChange"
          :item-props="item.view"
          :rest="restFlag"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="mini"
          @click="submitForm('ruleForm')"
        >
          提交
        </el-button>
        <el-button
          @click="resetForm('ruleForm')"
          size="mini"
        >
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import MForm from "@/components/m-form/index.vue";
import { formInit, ruleForm, formCopy } from "./form";
import { httpRequest } from "@/api/http";
import API from "@/api/api-config.js";
import { rules } from "./rules"
export default {
  components: { MForm },
  data() {
    return {
      ruleForm: ruleForm,
      formInit: formInit,
      restFlag: false,
      rules:rules
    };
  },
  created() {
    this.$store.commit("save", { loading: false });
    this.setSelectData();
  },
  methods: {
    handleChange(data) {
      console.log("form", data);
      this.ruleForm[data.key] = data.value;
      console.log("ruleForm", this.ruleForm);
    },
    setSelectData() {
      httpRequest("GET", API.select).then((res) => {
        console.log(res)
        this.formInit.forEach((v) => {
          if (v.view.bindKey == "select") {
            v.view.dataArr = res;
          }
        });
      });
    },
    getImgs(data) {
      console.log(data);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.ruleForm = formCopy
      console.log(formCopy,this.formInit)
      this.restFlag = true
    },
  },
};
</script>

<style lang="less" scope>
.form {
  background: #fff;
  padding: 30px 0;
}
  
</style>
