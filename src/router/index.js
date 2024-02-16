import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import LoginPage from '@/views/LoginPage.vue';



const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes: [
        {
            name: 'Home',
            path: '/smart-test',
            component: MainPage
        },
        {
            name: 'login',
            path: '/smart-test/login',
            component: LoginPage
        }


    ]
});

export default router;