import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import request from './apis/index'
request.get({ url: '/home/multidata' }).then((res) => {
  console.log(res)
})

createApp(App).use(store).use(router).mount('#app')
