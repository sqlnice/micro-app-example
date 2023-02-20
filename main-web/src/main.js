import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#master-container');
registerMicroApps([
  {
    name: 'app1',
    entry: 'http://139.224.111.34:60003/app1/',
    container: '#subapp-viewport',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: 'http://139.224.111.34:60003/app2/',
    container: '#subapp-viewport',
    activeRule: '/app2',
  },
]);

start();
