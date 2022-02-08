<template>
  <div class="nav-header">
    <el-icon
      class="fold-menu"
      :class="{ reverse: isFold, fold: true }"
      @click="handleFoldClick"
      ><fold
    /></el-icon>
    <div class="content">
      <div>break</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts" setup name="NavHeader">
import { Fold } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
import UserInfo from './UserInfo'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>
<style lang="scss">
.nav-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
.fold {
  transform: scale(1.5);
  cursor: pointer;
}
.reverse {
  transform: rotate(180deg) scale(1.5);
  cursor: pointer;
}
</style>
