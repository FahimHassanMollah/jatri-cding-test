<script setup>
import Footer from '../components/partials/Footer.vue';
import Nav from '../components/partials/Nav.vue';


</script>

<template>
    <div>
        <Nav />
        <div class="mt-20">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>



