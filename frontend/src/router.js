import Vue from 'vue'
import Router from 'vue-router'
import Vehiculos from '@/components/Vehiculos'
import RegistrarVehiculo from '@/components/RegistrarVehiculo'
import Ajustes from '@/components/Ajustes'
import ReporteVehiculos from '@/components/ReporteVehiculos'
import Escritorio from '@/components/Escritorio'

import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Menu from '@/components/Menu'
Vue.use(Router);

export default new Router({
    routes: [
 
        {
            path: '/',
            name: 'Vehiculos',
            component: Vehiculos
        },
        {
            path: '/agregar-vehiculo',
            name: 'RegistrarVehiculo',
            component: RegistrarVehiculo,
        },
        {
            path: '/ajustes',
            name: 'Ajustes',
            component: Ajustes,
        },
        {
            path: '/reporte-vehiculos',
            name: 'ReporteVehiculos',
            component: ReporteVehiculos,
        },
        {
            path: '/escritorio',
            name: 'Escritorio',
            component: Escritorio,
        },
               {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            props: {}
        },
                {
            path: '/menu',
            name: 'menu',
            component: Menu,
            props: {}
        },

    ]
});