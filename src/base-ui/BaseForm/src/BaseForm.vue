<template>
  <div class="base-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :style="itemStyle"
              :label="item.label"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%" :placeholder="item.placeholder">
                  <el-option
                    v-for="option of item.options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="BaseForm">
import { defineProps, PropType } from 'vue'
import { IFormItem, IForm } from '../types'
const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
</script>
<style lang="scss">
.base-form {
  padding-top: 22px;
}
</style>
