import {createRouter,createWebHashHistory} from 'vue-router'
import Sistema from '../components/Sistema.vue'
import Deportes from '../components/Deportes.vue'
import Profesores from '../components/Profesores.vue'
import Zonas from '../components/Zonas.vue'
import Usuario from '../components/Usuario.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {path: '/', component: Sistema },
    {path: '/Deportes', component: Deportes},
    {path: '/Profesores', component: Profesores},
    {path: '/Zonas', component: Zonas},
    {path: '/Usuario', component: Usuario},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router