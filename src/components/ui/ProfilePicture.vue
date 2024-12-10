<template>
    <img :src="image" alt="user profile picture" class="w-8 h-8 object-cover rounded-full">
</template>
<script setup>

const { image } = defineProps({ image: String })

</script>