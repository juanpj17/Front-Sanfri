import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IniciarSView from '@/views/IniciarSView.vue'
import RegistroView from '@/views/RegistroView.vue'
import ClientesRegView from '@/views/ClientesRegView.vue'
import ClientesHomeView from '@/views/ClientesHomeView.vue'
import ConsultarPerfilView from '@/views/ConsultarPerfilView.vue'
import AdministradorHomeView from '@/views/AdministradorHomeView.vue'
import CatalogoView from '@/views/CatologoView.vue'
import CatalogoClienteView from '@/views/CatalogoClienteView.vue'
import CrearProductoView from '@/views/CrearProductoView.vue'
import CatalogoAdmView from '@/views/CatalogoAdmView.vue'
import ConsultarAlmacenView from '@/views/ConsultarAlmacenView.vue'
import ModificarProductoView from '@/views/ModificarProductoView.vue'
import ModificarPerfilView from '@/views/ModificarPerfilView.vue'
import CarritoView from '@/views/CarritoView.vue'
import EnvioView from '@/views/EnvioView.vue'
import PagoView from '@/views/PagoView.vue'
import ConsultarPedidosView from '@/views/ConsultarPedidosView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/IniciarSView',
    name: 'IniciarSView',
    component: IniciarSView 
  },
  {
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/ClientesRegView',
    name: 'ClientesRegView',
    component: ClientesRegView
  },
  {
    path: '/ClientesHomeView/:email',
    name: 'ClientesHomeView',
    component: ClientesHomeView
  },
  {
    path: '/ConsultarPerfilView/:email',
    name: 'ConsultarPerfilView',
    component: ConsultarPerfilView
  },
  {
    path: '/ModificarPerfilView/:email',
    name: 'ModificarPerfilView',
    component: ModificarPerfilView 
  },
  {
    path: '/AdministradorHomeView',
    name: 'AdministradorHomeView',
    component: AdministradorHomeView
  },
  {
    path: '/CatologoView',
    name: 'CatalogoView',
    component: CatalogoView
  },
  {
    path: '/CatalogoClienteView/:email',
    name: 'CatalogoClienteView',
    component: CatalogoClienteView
  },
  {
    path: '/CrearProductoView',
    name: 'CrearProductoView',
    component: CrearProductoView 
  },
  {
    path: '/ModificarProductoView/:id',
    name: 'ModificarProductoView',
    component: ModificarProductoView 
  },
  {
    path: '/CatalogoAdmView',
    name: 'CatalogoAdmView',
    component: CatalogoAdmView
  },
  {
    path: '/ConsultarAlmacenView',
    name: 'ConsultarAlmacenView',
    component: ConsultarAlmacenView
  },
  {
    path: '/CarritoView/:email',
    name: 'CarritoView',
    component: CarritoView
  },
  {
    path: '/EnvioView/:email',
    name: 'EnvioView',
    component: EnvioView
  },
  {
    path: '/PagoView/:email',
    name: 'PagoView',
    component: PagoView
  },
  {
    path: '/ConsultarPedidosView',
    name: 'ConsultarPedidos',
    component: ConsultarPedidosView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
