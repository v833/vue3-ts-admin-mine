<template>
  <div>
    <el-form ref="ruleFormRef" :model="phone" :rules="rules" label-width="auto">
      <el-form-item label="账号" prop="number">
        <el-input
          v-model="phone.number"
          type="text"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <el-row :gutter="10">
          <el-col :span="14">
            <el-input
              v-model="phone.verifyCode"
              type="password"
              autocomplete="off"
            ></el-input
          ></el-col>
          <el-col :span="1"
            ><el-button type="primary">获取验证码</el-button></el-col
          >
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="LoginPhone">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
const phone = reactive({
  number: '',
  verifyCode: ''
})
</script>
<style lang=""></style>
