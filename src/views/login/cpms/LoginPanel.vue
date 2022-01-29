<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><avatar /></el-icon>账号登录</span
          >
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录</span
          >
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup name="LoginPanel">
import { Avatar, Iphone } from '@element-plus/icons-vue'
import { ref } from 'vue'
import LoginAccount from './LoginAccount'
import LoginPhone from './LoginPhone'

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const handleLoginClick = () => {
  accountRef.value.loginAction(isKeepPassword.value)
}
</script>
<style lang="scss">
.login-panel {
  margin-bottom: 150px;
  width: 350px;
  .el-icon {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
  }
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
