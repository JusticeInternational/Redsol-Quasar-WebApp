
const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: () => import('layouts/Home.vue'),
        children:[
            {
                path: '',
                name: 'home',
                component: () => import('pages/Index.vue')
            },
            {
                path: '/login',
                name:'login', //we always need a name 
                component: () => import('pages/Login.vue')
            },
        ]
    },
    {
        path:'/signup',
        name:'signup',
        redirect: {name: 'regstr'}, //selects on of the children as defoult
        component: ()=>import('src/layouts/SignUp.vue'),
        children:[
            {
                path:'usuario',
                name:'usuario',
                component: ()=>import('pages/UserSignUp.vue')
            },
            {
                path:'organization',
                name: 'organization',
                component: ()=>import('pages/OrganizationSignUp.vue')
            },
            {
                path:'',
                name: 'regstr',
                component: ()=>import('pages/SignUpSelector.vue')
            }
        ]

    },
    {
        path:'/usuario',
        name: 'profileU',
        component: ()=>import('layouts/Usuario.vue')

    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }

]

export default routes
