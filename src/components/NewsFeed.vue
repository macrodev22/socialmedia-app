<template>
    <div class="bg-gray-100 p-4">
        <NewPost />
        <p v-for="i of 100">Hi hola hi {{ i }}</p>
    </div>
</template>
<script setup>
import NewPost from './NewPost.vue'

</script>