import axios from "axios";
import { useToast } from "vue-toast-notification";
import router from "../../../router";
const $toast = useToast();
export default {
    async getProducts({ commit }) {

        commit('SET_IS_LOADING', { dataFor: 'products', value: true });
        commit('SET_IS_ERROR', { dataFor: 'products', value: false });
        commit('SET_PRODUCTS', []);
        commit('SET_IS_SUCCESS', { dataFor: 'products', value: false });

        const path = `/products`;

        try {

            const response = await axios.get(path);


            if (response?.data?.products) {
                await commit('SET_IS_SUCCESS', { dataFor: 'products', value: true });
                await commit('SET_PRODUCTS', response.data.products);
            }
            commit('SET_IS_LOADING', { dataFor: 'products', value: false });



        } catch (error) {
            commit('SET_IS_LOADING', { dataFor: 'products', value: false });
            commit('SET_IS_ERROR', { dataFor: 'products', value: true });
            await commit('SET_IS_SUCCESS', { dataFor: 'products', value: false });

            const errorData = {};
            if (error?.response?.data?.message) {
                $toast.open({
                    message: `${error.response.data.message}`,
                    type: 'error',
                });
                errorData.message = error?.response?.data?.message;

            } else {
                if (error?.message) {
                    $toast.open({
                        message: `${error.message}`,
                        type: 'error',
                    });
                    errorData.message = error.message;

                }
            }

            if (error?.response?.data?.errors) {
                errorData.errors = error.response.data.errors;

            }
            await commit('SET_ERROR', { dataFor: 'products', value: errorData });
        }
    },



    async getProduct({ commit }, id) {

        commit('SET_IS_LOADING', { dataFor: 'product', value: true });
        commit('SET_IS_ERROR', { dataFor: 'product', value: false });
        commit('SET_PRODUCT', null);
        commit('SET_IS_SUCCESS', { dataFor: 'product', value: false });

        const path = `products/${id}`;

        try {

            const response = await axios.get(path);

            if (response?.data) {
                await commit('SET_IS_SUCCESS', { dataFor: 'product', value: true });
                await commit('SET_PRODUCT', response.data);
            }
            commit('SET_IS_LOADING', { dataFor: 'product', value: false });



        } catch (error) {
            commit('SET_IS_LOADING', { dataFor: 'product', value: false });
            commit('SET_IS_ERROR', { dataFor: 'product', value: true });
            await commit('SET_IS_SUCCESS', { dataFor: 'product', value: false });

            const errorData = {};
            if (error.response.status === 404) {
                $toast.open({
                    message: `Page not found`,
                    type: 'error',
                });
                router.push({ name: 'notFound' })
                return;
            }
            if (error?.response?.data?.message) {
                $toast.open({
                    message: `${error.response.data.message}`,
                    type: 'error',
                });
                errorData.message = error?.response?.data?.message;

            } else {
                if (error?.message) {
                    $toast.open({
                        message: `${error.message}`,
                        type: 'error',
                    });
                    errorData.message = error.message;

                }
            }

            if (error?.response?.data?.errors) {
                errorData.errors = error.response.data.errors;

            }
            await commit('SET_ERROR', { dataFor: 'product', value: errorData });
        }
    },

}