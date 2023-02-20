import './public-path.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let instance = null
const render = (props = {}) => {
  const { container } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('app1 bootstrap')
}

export async function mount (props) {
  console.log('app1 mount')
  render(props)
}

export async function unmount (props) {
  console.log('app1 unmount')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
