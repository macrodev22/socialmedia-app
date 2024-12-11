<template>
    <router-link class="flex items-center justify-center gap-2 p-2 bg-white rounded-md hover:bg-gray-200 w-1/3"
        :to="to">
        <img :src="image" class="w-6 h-6" v-if="image">
        <div class="flex items-center justify-center w-6 h-6 text-blue-500">
            <slot />
        </div>
        <span class="text-xs text-gray-500 font-bold">{{ label }}</span>
    </router-link>
</template>
<script setup>
const { to, image, label } = defineProps({ to: { type: String, default: '#' }, image: String, label: String })

</script>