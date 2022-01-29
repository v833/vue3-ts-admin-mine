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
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="LoginAccount">
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import appStore from '@/store'

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
// TODO
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 判断是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
    }
  })
  appStore.useUserStore.accountLoginAction(account)
}

defineExpose({
  loginAction
})
</script>
<style lang=""></style>
