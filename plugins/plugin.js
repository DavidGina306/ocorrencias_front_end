import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select'
import VueIziToast from 'vue-izitoast'
import 'vue-select/dist/vue-select.css'
import 'izitoast/dist/css/iziToast.min.css'
import VueMask from 'v-mask'

Vue.component('v-select', vSelect)
Vue.use(VueMask)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueIziToast)
