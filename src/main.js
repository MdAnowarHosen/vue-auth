import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
window.toastr = require('toastr');
require('bootstrap');
import '../src/scss/app.scss'



createApp(App).use(store).use(router).mount('#app')
