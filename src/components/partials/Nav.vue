<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
    <!-- Navbar -->
    <nav class="py-4 bg-white/80
                        backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">

        <div class="container mx-auto flex items-center">
            <!-- Logo Container -->
            <div class="flex items-center">
                <!-- Logo -->
                <RouterLink to="/" class="cursor-pointer">
                    <h3 class="text-2xl font-medium text-blue-500">
                        <img class="h-10" src="https://www.jatri.co/_nuxt/logo.8ff6666c.svg" alt="Logo">
                    </h3>
                </RouterLink>
            </div>
            <!-- Links Section -->
            <div class="flex ml-auto space-x-8">
                <div class="items-center hidden space-x-8 lg:flex">
                    <RouterLink to="/products" class="flex text-gray-600 hover:text-primary-light
                                        cursor-pointer transition-colors duration-300">
                        Project
                    </RouterLink>
                </div>

               
            </div>
        </div>
    </nav>
</template>