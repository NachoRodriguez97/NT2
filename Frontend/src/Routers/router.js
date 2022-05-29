import {createRouter,createWebHashHistory} from 'vue-router'
import Sistema from '../components/Sistema.vue'
import Deportes from '../components/Deportes.vue'
import Profesores from '../components/Profesores.vue'
import Reservas from '../components/Reservas.vue'
import AdmUsuarios from '../components/AdmUsuarios.vue'
import Login from '../components/Login.vue'
import Reservar from '../components/Reservar.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {path: '/', component: Sistema },
    {path: '/Deportes', component: Deportes},
    {path: '/Profesores', component: Profesores},
    {path: '/Reservas', component: Reservas},
    {path: '/AdmUsuarios', component: AdmUsuarios},
    {path: '/Login', component: Login},
    {path: '/Reservar', component: Reservar},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router