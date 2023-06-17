<script setup>
const props = defineProps(['pageNumbers','currentPage']);
const emit = defineEmits(['updateCurrentPageNumberHandler']);

const changePage = (pageNo) => { 
    emit('updateCurrentPageNumberHandler', pageNo);
 }
</script>

<template>
    <div class=" border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 items-center justify-end">
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button @click="changePage(pageNumber)" v-for="(pageNumber,index) in pageNumbers" :key="index" aria-current="page"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-400 focus:z-20 focus:outline-offset-0" :class="`${currentPage === pageNumber ? 'bg-indigo-600 text-white' : ''}`">{{ pageNumber }}</button>
                </nav>
            </div>
        </div>
    </div>
</template>
