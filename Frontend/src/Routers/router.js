import {createRouter,createWebHashHistory} from 'vue-router'

import Home from '../views/HomeView.vue'
import Deportes from '../views/DeportesView.vue'
import Profesores from '../views/ProfesoresView.vue'
import MisReservas from '../views/MisReservasView.vue'
import AdmUsuarios from '../views/AdmUsuariosView.vue'
import Login from '../views/LoginView.vue'
import Registro from '../views/RegistroView.vue'
import Reservar from '../views/ReservarView.vue'
import NotFound from '../views/NotFoundView.vue'
import Horarios from '../components/Horarios.vue'
import EditDeporte from '../components/EditDeporte.vue'

const routes = [
    {path: '/', component: Home },
    {path: '/Deportes', component: Deportes},
    {path: '/Profesores', component: Profesores},
    {path: '/Reservas', component: MisReservas},
    {path: '/AdmUsuarios', component: AdmUsuarios},
    {path: '/Login', component: Login},
    {path: '/Horarios', component: Horarios},
    {path: '/EditDeporte/:nombre', component: EditDeporte},
    {path: '/Registro', component: Registro},
    {path: '/Reservar', component: Reservar},

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router