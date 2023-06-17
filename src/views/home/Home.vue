<script setup>
import AppLayout from '../../layouts/AppLayout.vue';


</script>

<template>
    <AppLayout>
        <div class="w-full flex justify-center mt-16 h-screen">
            <div class="bg-white relative rounded-2xl -mx-4 p-8 space-y-8 max-w-4xl text-center">
                <div class="space-y-4">
                    <h2 class="font-heading font-bold text-2xl">
                        WELCOME TO PROJECT
                    </h2>
                    <p class="text-xl">
                        This project build with the most popular javaScript framework <span
                            class="text-green-700 font-semibold">VUE JS</span>
                    </p>
                </div>
                <div
                    class='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
                    <div class="flex flex-col md:items-center md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                        <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
                            <div class="w-1/2 md:w-full  rounded-full overflow-hidden">
                                <img src="../../assets/fahimDev.jpg"
                                    alt="woman wearing a headwrap and an Africa-shaped earring while smiling" />
                            </div>
                        </div>
                        <div class="w-full md:w-3/5 space-y-4 flex flex-col">
                            <div class="">
                                <h1 class="text-2xl font-bold text-gray-900 text-center md:text-left">Fahim Hassan
                                </h1>
                                <p class=" text-gray-700 font-normal text-center md:text-left">Frontend Developer
                                </p>
                                <p class=" text-gray-700 font-normal text-center md:text-left">fahimhassan0197@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>