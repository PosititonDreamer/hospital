import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Auth',
        path: '/',
        component: () => import('@/pages/Auth/Auth.vue'),
    },
    {
        name: 'Register',
        path: '/Register',
        component: () => import('@/pages/Register/Register.vue'),
    },
    {
        name: 'Dashboard',
        path: '/Dashboard',
        component: () => import('@/pages/Dashboard/Dashboard.vue'),
    },
    {
        name: 'UI',
        path: '/UI',
        component: () => import('@/pages/UI/UI.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;