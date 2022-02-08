<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
        <span class="name">{{ name }}</span>
        <el-icon class="el-icon--right arrow">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup name="UserInfo">
import { ArrowDown } from '@element-plus/icons-vue'
import { reactive, toRefs, computed } from 'vue'
import appStore from '@/store'
const name = computed(() => appStore.useUserStore.userInfo.name)
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['large', 'default', 'small']
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--el-border-color-base);
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid var(--el-border-color-base);
}
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  cursor: pointer;
}
</style>
