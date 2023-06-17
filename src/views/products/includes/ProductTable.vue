<script setup>
import ProductRow from "./ProductRow.vue";

const emit = defineEmits(["openProductDetails", "closeProductDetails"]);
const props = defineProps(["allProducts", "indexOfFirstProduct"]);

const showProductDetails = (prodId) => {
    emit("openProductDetails", prodId);
};

const hideProductDetails = () => {
    emit("closeProductDetails");
};
</script>

<template>
    <table class="w-full table-auto rounded">
        <thead class="text-xs font-semibold uppercase text-gray-900 bg-gray-100">
            <tr>
                <th class="px-4 py-3 border-b border-gray-200 text-sm">
                    <div class="font-semibold text-left">Sl</div>
                </th>
                <th class="px-4 py-3 border-b border-gray-200 text-sm">
                    <div class="font-semibold text-left">Name</div>
                </th>
                <th class="px-4 py-3 border-b border-gray-200 text-sm">
                    <div class="font-semibold text-left">Rating</div>
                </th>
                <th class="px-4 py-3 border-b border-gray-200 text-sm">
                    <div class="font-semibold text-left">Price</div>
                </th>
                <th class="px-4 py-3 border-b border-gray-200 text-sm">
                    <div class="font-semibold text-left">Actions</div>
                </th>
            </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-100">
            <template v-for="(singleProduct, productIndex) in allProducts">
                <ProductRow :indexOfFirstProduct="indexOfFirstProduct" @openProductDetails="showProductDetails"
                    @closeProductDetails="hideProductDetails" :product="singleProduct" :index="productIndex" />
            </template>
        </tbody>
    </table>
</template>
