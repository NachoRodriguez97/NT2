import {createRouter,createWebHashHistory} from 'vue-router'
import Sistema from '../components/Sistema.vue'
import Deportes from '../components/Deportes.vue'
import Profesores from '../components/Profesores.vue'
import Zonas from '../components/Zonas.vue'
import AdmUsuarios from '../components/AdmUsuarios.vue'
import Login from '../components/Login.vue'
import Horarios from '../components/Horarios.vue'
import EditDeporte from '../components/EditDeporte.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {path: '/', component: Sistema },
    {path: '/Deportes', component: Deportes},
    {path: '/Profesores', component: Profesores},
    {path: '/Zonas', component: Zonas},
    {path: '/AdmUsuarios', component: AdmUsuarios},
    {path: '/Login', component: Login},
    {path: '/Horarios', component: Horarios},
    {path: '/EditDeporte/:nombre', component: EditDeporte},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router