import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { registerStore } from '@/store'
import ElementPlus from 'element-plus'
import piniaPersist from 'pinia-plugin-persist'
// import 'normalize.css'
import 'element-plus/dist/index.css'
createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(createPinia().use(piniaPersist))
  .use(PiniaVuePlugin)
  .mount('#app')

registerStore()
