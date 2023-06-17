<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Loader from "../../../components/partials/Loader.vue";

const store = useStore();
const product = computed(() => store.getters["product/product"]);
const productStatus = computed(() => store.getters["product/productStatus"]);
</script>

<template>
  <div>
    <template v-if="productStatus?.isLoading">
      <Loader />
    </template>
    <div class="border-solid border-2 rounded-lg border-sky-500 p-4">
      <p class="text-center">View Details</p>
      <p class="text-center">..............................................</p>
      <h4>Name : {{ product?.title }}</h4>
      <h4>Price : {{ product?.price }}</h4>
      <h4>Rating : {{ product?.rating }}</h4>
      <h4>Description: : {{ product?.description }}</h4>
    </div>
  </div>
</template>

