import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'
import router from './router'
import VueMarkdown from 'vue-markdown'
import GAuth from 'vue-google-oauth2'
import interceptSetup from './axios'
import { 
  NavbarPlugin,
  FormInputPlugin,
  ButtonPlugin,
  SidebarPlugin,
  LayoutPlugin,
  TablePlugin,
  FormPlugin,
  FormGroupPlugin,
  FormSelectPlugin,
  CardPlugin,
  PaginationPlugin,
  InputGroupPlugin,
  AvatarPlugin
 } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

library.add(faGoogle, faBan)


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('vue-markdown', VueMarkdown);
Vue.component('font-awesome-icon', FontAwesomeIcon)
const gauthOption = {
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(VueMarkdown)
Vue.use(NavbarPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(FormInputPlugin)
Vue.use(ButtonPlugin)
Vue.use(SidebarPlugin)
Vue.use(LayoutPlugin)
Vue.use(VueSidebarMenu)
Vue.use(TablePlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(CardPlugin)
Vue.use(FormSelectPlugin)
Vue.use(PaginationPlugin)
Vue.use(ButtonPlugin)
Vue.use(InputGroupPlugin)
Vue.use(AvatarPlugin)

interceptSetup()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
