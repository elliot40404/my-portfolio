import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'HOME',
        },
    },
    {
        path: '/projects',
        name: 'Project',
        component: () => import('../views/Project.vue'),
        meta: {
            title: 'VIEW - PROJECT',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'ERROR',
        // component: () => import('../views/404.vue'),
        component: Home,
        meta: {
            title: 'HOME',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `A V I S H E K | ${to.meta.title}`;
    next();
});

export default router;