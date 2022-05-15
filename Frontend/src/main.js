import { createApp } from 'vue'
import App from './App.vue'
import router from './Routers/router'
import { createPinia } from 'pinia'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())

app.use(router);

AOS.init()

app.mount('#app')
