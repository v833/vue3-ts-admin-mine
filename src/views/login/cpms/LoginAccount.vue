<template>
  <div>
    <el-form ref="formRef" :model="account" :rules="rules" label-width="auto">
      <el-form-item label="账号" prop="name">
        <el-input
          v-model="account.name"
          type="text"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="LoginAccount">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

const account = reactive({
  name: '',
  password: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef.value.validate((valid) => {
    if (valid) {
    }
  })
}

defineExpose({
  loginAction
})
</script>
<style lang=""></style>
