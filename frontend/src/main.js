import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import { Expand, ChatRound } from '@element-plus/icons'
import axios from 'axios'

const app = createApp(App)
app.use(installElementPlus)
app.use(store).use(router).mount('#app')
// 全局配置axios
app.config.globalProperties.$http = axios
// 使用element icon
app.component('expand', Expand)
  .component('chat-round', ChatRound)
