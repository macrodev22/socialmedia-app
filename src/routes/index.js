import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import NewsFeed from '../components/NewsFeed.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        children: [
            { path: '', component: NewsFeed, name: 'news-feed' },
        ],
    },
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
