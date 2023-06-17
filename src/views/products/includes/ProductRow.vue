<script setup>
import ProductDetails from "./ProductDetails.vue";

const emit = defineEmits(["openProductDetails", "closeProductDetails"]);
const props = defineProps(["product", "index", "indexOfFirstProduct"]);

const showProductDetails = (prodId) => {
    emit("openProductDetails", prodId);
};

const hideProductDetails = () => {
    emit("closeProductDetails");
};
</script>

<template>
    <tr>
        <td class="py-2 px-4 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
            <div class="text-left">{{ indexOfFirstProduct + index + 1 }}</div>
        </td>
        <td class="py-2 px-4 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
            <div class="text-left">{{ product?.title ?? "" }}</div>
        </td>
        <td class="py-2 px-4 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
            <div class="text-left">{{ product?.rating ?? "" }}</div>
        </td>
        <td class="py-2 px-4 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
            <div class="text-left">{{ product?.price ?? "" }}</div>
        </td>

        <td class="py-2 px-4 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
            <button @click="showProductDetails(product.id)" v-if="!product?.isShow"
                class="text-white font-bold py-2 px-4 rounded" style="background-color: #70ad47">
                Show
            </button>
            <button @click="hideProductDetails()" v-else class="text-white font-bold py-2 px-4 rounded"
                style="background-color: #f67c2c">
                Close
            </button>
        </td>
    </tr>
    <tr v-if="product?.isShow === true">
        <td colspan="5" class="py-2 px-4 border-b border-gray-200 bg-white text-sm">
            <ProductDetails />
        </td>
    </tr>
</template>


