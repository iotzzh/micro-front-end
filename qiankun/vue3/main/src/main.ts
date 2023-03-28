import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 开发模式时，entry的值为子应用的开发演示环境的地址
if ("development" === import.meta.env.MODE) {
    registerMicroApps([
      {
        name: "app1",
        entry: "//localhost:10001/",
        container: "#container",
        activeRule: "/app1",
      },
      {
        name: "app2",
        entry: "//localhost:10002/",
        container: "#container",
        activeRule: "/app2",
      },
    ]);
  } else {
    // 生产环境时，entry的路径为app在部署时的真实路径
    registerMicroApps([
      {
        name: "app1",
        entry: "./sub/app1",
        container: "#container",
        activeRule: "/app1",
      },
      {
        name: "app2",
        entry: "./sub/app2",
        container: "#container",
        activeRule: "/app2",
      },
    ]);
  }
  
  setDefaultMountApp("/app1");
  
  // 启动 qiankun
  start();
  











