import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import antDesign from 'ant-design-vue'
import router from './router'

const app = createApp(App)

app.use(antDesign)
app.use(router)
app.mount('#app')
