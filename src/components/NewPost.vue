<template>
    <div class="bg-white rounded-md shadow-sm flex flex-col w-1/2 p-4">
        <div class="flex">
            <ProfilePicture :image="user.photo" />
            <input type="text" class="bg-gray-200 focus:outline-none rounded-full pl-4 ml-4 flex-1" :placeholder=newPostPlaceHolder>
        </div>
        <div class="border border-t-1 mt-4 flex">

        </div>

    </div>

</template>
<script setup>
import { ref, computed } from 'vue'

import ProfilePicture from './ui/ProfilePicture.vue'

const user = ref({
    photo: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
    firstName: 'Roly',
    lastName: 'Lolly'
})

const newPostPlaceHolder = computed(() => `What's on your mind, ${user.value.firstName}?`)


</script>