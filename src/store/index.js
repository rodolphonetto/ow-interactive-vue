import Vuex from "vuex"
import Vue from "vue"

import { getProductsOnCart } from "../components/cart"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsOnCart: [] // The TV inventory
  },

  getters: {
    totalProductsOnCart: state => {
      return state.productsOnCart.length
    }
  },

  mutations: {
    updateCount(state) {
      state.productsOnCart = getProductsOnCart()
    }
  },

  actions: {
    updateProductsOnCart(context) {
      context.commit("updateCount")
    }
  }
})
