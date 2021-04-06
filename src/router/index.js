import Vue from 'vue'
import VueRouter from 'vue-router'
import Mode from '../components/Mode'
import Role from '../components/Role'
import Chessboard from '../components/Chessboard'

Vue.use(VueRouter)

const routes = [
    { path: '/mode', name: 'Mode', component: Mode },
    { path: '/role', name: 'Role', component: Role },
    { path: '/Chessboard', name: 'Chessboard', component: Chessboard },
]
const router = new VueRouter({
    routes
})
export default router
