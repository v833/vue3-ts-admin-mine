<template>
  <div class="user">
    <div class="search">
      <BaseForm v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup name="User">
import { ref } from 'vue'
import BaseForm, { IFormItem, IForm } from '@/base-ui/BaseForm'
const formConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        {
          title: '篮球',
          value: 'baseketball'
        },
        {
          title: '足球',
          value: 'football'
        },
        {
          title: '乒乓球',
          value: 'ping-pang'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  colLayout: { span: 8 },
  itemStyle: { padding: '10px 40px' }
}
</script>

<style scoped></style>
