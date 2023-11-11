import { createApp } from 'vue'
import App from './App.vue'

import { usePrimeVue } from './plugins/primevue'

import './assets/css/app.css'

const app = createApp(App)

app.use(usePrimeVue)

app.mount('#app')
