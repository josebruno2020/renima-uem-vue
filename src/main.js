import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import Vuex from 'vuex'
import ToggleButton from 'vue-js-toggle-button'
import VeeValidate, { Validator } from 'vee-validate'
import msg from 'vee-validate/dist/locale/pt_BR';
import http from './services/http';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/global.css';

Vue.use(http)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTheMask)
Vue.use(ToggleButton)
Vue.use(VeeValidate);
Validator.localize('pt_BR', msg);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
