import { createStore } from "vuex";
import product from "./modules/product/product";

const store = createStore({
  modules: {
    product
  }
})


export default store;  