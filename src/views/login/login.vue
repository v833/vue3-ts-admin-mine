<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script lang="ts" setup name="Login">
import LoginPanel from './cpms/LoginPanel.vue'
</script>
<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
