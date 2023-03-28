import {
    renderWithQiankun,
    qiankunWindow,
  } from "vite-plugin-qiankun/dist/helper";

  
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#app");
} else {
  renderWithQiankun({
    mount(props) {
      console.log("--app 02 mount");

      app = createApp(App);
      app.use(router);
      app.mount(
        (props.container
          ? props.container.querySelector("#app")
          : document.getElementById("app")) as Element
      );
    },
    bootstrap() {
      console.log("--app 02 bootstrap");
    },
    update() {
      console.log("--app 02 update");
    },
    unmount() {
      console.log("--app 02 unmount");
      app?.unmount();
    },
  });
}
