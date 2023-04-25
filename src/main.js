import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

import "bootstrap/dist/css/bootstrap.css";
import './assets/main.css'


const app = createApp(App)
const store = createStore()

app.use(router)
app.use(store)

app.mount('#app')
