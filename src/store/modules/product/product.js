import productAction from "./productAction";



const product = {
    namespaced: true,
    state: {
        products: [],
        product:null,
        status: {
            products: {
                isSuccess: false,
                isLoading: false,
                isError: false,
                error: null,
            },
            product: {
                isSuccess: false,
                isLoading: false,
                isError: false,
                error: null,
            }

        },
    },
    getters: {
        
        products(state) {
            return state.products;
        },
        productsStatus(state) {
            return state.status.products;
        },
      
        product(state) {
            return state.product;
        },
        productStatus(state) {
            return state.status.product;
        },
       

    },
    mutations: {
        SET_IS_LOADING(state, { dataFor, value }) {
            state.status[dataFor].isLoading = value;
        },
        SET_IS_ERROR(state, { dataFor,value}) {
            state.status[dataFor].isError = value;
        },
        SET_ERROR(state, {dataFor, value}) {
            state.status[dataFor].error = value;
        },
        SET_IS_SUCCESS(state, {dataFor, value}) {
            state.status[dataFor].isSuccess = value;
        },
        SET_PRODUCT(state, product) {
            state.product = product
        },
        SET_PRODUCTS(state, products) {
            const productsWithIsShowProperty = products.map((prod=> ({...prod,isShow:false})));
            state.products = productsWithIsShowProperty;
        },
       
    },
    actions: productAction,

}

export default product;