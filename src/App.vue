<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
/* select tag css */
.multiselect__option--selected.multiselect__option--highlight {
    background: #ef4935 !important;
    color: #ffff !important;
}

.multiselect__option--highlight {
    background: #ef4935;
    outline: none;
    color: #fff;
}

.multiselect__tags {
    overflow: visible !important;
    /* max-height: auto !important; */
    /* max-height: 38px !important; */
    /* border-color: #dfe3e7; */
    border: 1px solid #e8e8e8;
}

.multiselect__tags:focus-within {
    border: 1px solid #ef4935 !important;
    /* border-color: #ef4935 !important; */
}

.multiselect__tags:focus {
    border: 1px solid #ef4935 !important;
    /* border-color: #ef4935 !important; */
}

.multiselect__tags:focus {
    border: 1px solid #ef4935;
}
</style>
