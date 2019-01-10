import Vue from 'vue'
import Router from 'vue-router'
const Login = ()=>import('./pages/login.vue')
const Info = ()=>import('./pages/info.vue')

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path:'/',
                redirect:'/login'
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/info',
                component: Info
            }
        ]
    })

}