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
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录</span
          >
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup name="LoginPanel">
import { Avatar, Iphone } from '@element-plus/icons-vue'
</script>
<style lang="scss">
.login-panel {
  min-width: 320px;
  .el-icon {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
  }
  .title {
    text-align: center;
  }
}
</style>
