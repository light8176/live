import VueRouter from 'vue-router'
import Foo from './view/foo.vue'
import Bar from './view/bar.vue'

const routes = [
    { path: '/', component: Foo },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for routes: routes
})

export default router
