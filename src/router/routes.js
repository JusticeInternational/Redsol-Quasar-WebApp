
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('pages/Index.vue')
        
    },
    {
        path: '/login',
        name:'login', //we always need a name 
        component: () => import('pages/Login.vue')
        
    },
    {
        path:'/usersignup',
        name:'usersignup',
        component: ()=> import('pages/UserSignUp.vue')
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }

]

export default routes
