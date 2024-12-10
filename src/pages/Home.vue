<template>
    <div class="flex flex-col h-screen overflow-y-hidden bg-gray-100">
        <Nav />
        <div class="flex overflow-y-hidden flex-1">
            <SideBar class="w-1/3" />
            <div class="overflow-x-hidden w-2/3">
                <RouterView />
            </div>
            
        </div>
    </div>
</template>
<script setup>
import Nav from '../components/Nav.vue'
import SideBar from '../components/Sidebar.vue'
</script>