import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
// 导入通用样式
import "./style/base.css";
//导入字体图标
import "./style/iconfont.css";
//导入lib-flexible模块, 会自动适配所有屏幕,给每个屏幕设置对应的fontSize.
import "lib-flexible";
import router from "./router/index.js";
//全局导入axios发送ajax请求
import axios from "axios";
//全局注册组件
import hmHeader from "./components/HmHeader.vue";
import HmIcon from "./components/HmIcon.vue";
import HmButton from "./components/HmButton.vue";
import HmInput from "./components/HmInput.vue";
//将axios绑定到Vue原型上，这样所有Vue实例都可以通过this.$axios访问到axios；
Vue.prototype.$axios = axios;
//axios在发送请求时，会自动把baseURL添加到URL前；
axios.defaults.baseURL = "http://localhost:3000";
Vue.component("hmHeader", hmHeader);
Vue.component("HmIcon", HmIcon);
Vue.component("HmButton", HmButton);
Vue.component("HmInput", HmInput);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
