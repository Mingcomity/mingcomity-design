import { createApp } from 'vue'
import App from './App.vue'
import McDesing from '../../dist/es'
import '../../dist/dist/index.css'
const app = createApp(App)

app.use(McDesing)

app.mount('#app')
