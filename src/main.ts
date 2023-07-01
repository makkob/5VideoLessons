import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()
console.log(app) // Console log the app instance

app.use(pinia)
app.mount('#app')
