
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

    {
        path:'/signup',
        name:'signup',
        component: ()=>import('layouts/Registration.vue'),
        children:[
            {
                path:'usuario',
                name:'usuario',
                component: ()=>import('pages/UserSignUp.vue')
            },
            // {
            //     path:'/organization'
            // },
        ]

    },




    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }

]

export default routes
