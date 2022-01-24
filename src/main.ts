import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import WQRequest from './service/index'
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
