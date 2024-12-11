<template>
    <router-link :to="href">
        <img :src="image" alt="user profile picture" class="w-8 h-8 object-cover rounded-full">
    </router-link>
</template>
<script setup>

const { image, href } = defineProps({ image: String, href: { type: String, default: '#' } })

</script>