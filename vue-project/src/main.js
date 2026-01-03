import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// importer le CSS global
import './assets/style.css'

createApp(App).use(router).mount('#app')
