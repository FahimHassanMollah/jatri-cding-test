<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import Loader from '../../components/partials/Loader.vue';
import { useToastMessage } from '../../composables/useToastMessage';
import AppLayout from '../../layouts/AppLayout.vue';
import ProductTable from './includes/ProductTable.vue';
import Pagination from './includes/Pagination.vue';
import ProductFilter from './includes/ProductFilter.vue';


// hooks
const store = useStore();
const { showToastMessage } = useToastMessage();


// states
const productsStatus = computed(() => store.getters['product/productsStatus']);
const productStatus = computed(() => store.getters['product/productStatus']);
const products = computed(() => store.getters['product/products']);
const product = computed(() => store.getters['product/product']);
const productPerPage = ref(5);
const currentPage = ref(1);
const indexOfLastProduct = ref(productPerPage.value * currentPage.value);
const indexOfFirstProduct = ref(indexOfLastProduct.value - productPerPage.value);
const currentProducts = ref([]);

// computed properties
const pageNumbers = computed(() => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.value.length / productPerPage.value); i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
})


// life cycle hooks
onMounted(async () => {
    await getAllProductsHandler();
    currentProducts.value = products.value.slice(indexOfFirstProduct.value, indexOfLastProduct.value);
})

// watcher
watch(currentPage, (currentPage) => {
    indexOfLastProduct.value = productPerPage.value * currentPage;
    indexOfFirstProduct.value = indexOfLastProduct.value - productPerPage.value;
    currentProducts.value = products.value.slice(indexOfFirstProduct.value, indexOfLastProduct.value);
})

// methods
const getAllProductsHandler = async () => {
    await store.dispatch('product/getProducts');
    if (productsStatus.value.isSuccess) {
        showToastMessage('success', 'Products fetched successfully');
    }

}
const getSingleProductHandler = async (productId) => {
    await store.dispatch('product/getProduct', productId);

}
const openProductDetailsHandler = async (productId) => {
    await getSingleProductHandler(productId);
    if (productStatus.value.isSuccess && product.value?.id === productId) {
        currentProducts.value = currentProducts.value.map((prod) => {
            if (prod.id === productId) {
                return { ...prod, isShow: true }
            }
            return { ...prod, isShow: false }
        })
    }
}
const closeProductDetailsHandler = () => {
    currentProducts.value = currentProducts.value.map((prod) => {
        return { ...prod, isShow: false }
    })
}
const updateCurrentPageNumberHandler = (pageNumber) => {
    currentPage.value = pageNumber;
}

const priceFilterHandler = (type) => {
    if (type === 'Accending') {
        currentProducts.value = currentProducts.value.sort((a, b) => a.price - b.price);
    } else {
        currentProducts.value = currentProducts.value.sort((a, b) => b.price - a.price);
    }
}
const ratingFilterHandler = (type) => {
    if (type === 'Accending') {
        currentProducts.value = currentProducts.value.sort((a, b) => a.rating - b.rating);
    } else {
        currentProducts.value = currentProducts.value.sort((a, b) => b.rating - a.rating);
    }
}
</script>


<template>
    <AppLayout>
        <div>
            <template v-if="productsStatus?.isLoading">
                <Loader />
            </template>
            <div class="container mx-auto">
                <ProductFilter @ratingFilterHandler="ratingFilterHandler" @priceFilterHandler="priceFilterHandler" />
                <div class="overflow-x-auto">
                    <ProductTable :indexOfFirstProduct="indexOfFirstProduct" :allProducts="currentProducts"
                        @openProductDetails="openProductDetailsHandler" @closeProductDetails="closeProductDetailsHandler" />
                </div>
                <Pagination :currentPage="currentPage" :pageNumbers="pageNumbers"
                    @updateCurrentPageNumberHandler="updateCurrentPageNumberHandler" />
            </div>

        </div>
    </AppLayout>
</template>







