<template>
  <div>
    <el-icon :class="{ reverse: isFold, fold: true }" @click="handleFoldClick"
      ><fold
    /></el-icon>
  </div>
</template>

<script lang="ts" setup name="NavHeader">
import { Fold } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>
<style lang="scss">
.fold {
  transform: scale(1.5);
  cursor: pointer;
}
.reverse {
  transform: rotate(180deg) scale(1.5);
  cursor: pointer;
}
</style>
