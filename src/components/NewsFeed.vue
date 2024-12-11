<template>
    <div class="bg-gray-100 p-4">
        <NewPost />
        <Post v-for="post of posts" :key="post.id" :post="post" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import NewPost from './NewPost.vue'
import Post from './Post.vue';

const posts = [
    { id: 1, user: { name: 'Tom Boil', photo: 'https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_960_720.jpg' }, date: '28 December 2023', description: 'Overwhilming, never ending, reckless love of GOD', media: [{ type: 'image', src: '/img/10.3.22_TheLoveofGod-1024x683.jpg' }], likes: 1223, comments: [] },
    { id: 2, user: { name: 'Tom Boil', photo: 'https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_960_720.jpg' }, date: '28 December 2023', description: 'Overwhilming, never ending, reckless love of GOD', media: [{ type: 'image', src: '/img/10.3.22_TheLoveofGod-1024x683.jpg' }], likes: 1225, comments: [] },
]

</script>