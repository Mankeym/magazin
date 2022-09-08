import { createStore } from "vuex";
import {productItemStore} from "@/store/productItemStore/productItemStore";

export default createStore({
    modules: {
        productItemStore
    }
})
