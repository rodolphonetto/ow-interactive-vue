<template>
  <div class="fragment">
    <div class="searchContainer">
      <span class="text">Escontre seu produto</span>
      <form class="formContainer">
        <input v-model="searchWord" @keyup.enter="searchProduct" type="text" class="inputSearch" />
        <button class="buttonSearch" type="submit"></button>
      </form>
    </div>
    <div class="container">
      <productItem
        @add-prod="addToCart"
        :product="product"
        :productsOnCart="productsOnCart"
        :key="product.name"
        v-for="product in products"
      />
    </div>
  </div>
</template>

<script>
import * as C from "../cart";
import ProductItem from "./ProductsItem";

export default {
  name: "Products",
  components: {
    ProductItem
  },
  props: ["products"],
  data() {
    return {
      productsOnCart: C.getProductsOnCart(),
      productsToDisplay: [],
      searchWord: ""
    };
  },
  methods: {
    addToCart(name, price) {
      this.productsOnCart = [
        ...this.productsOnCart,
        { prodName: name, prodPrice: price, qtd: 1 }
      ];
      C.addNewProduct(this.productsOnCart);
      this.$store.dispatch("updateProductsOnCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.fragment {
  grid-column: 2 / 12;
}
.container {
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 6rem;
  justify-content: center;
}
.searchContainer {
  grid-column: 2 / 12;
  margin-top: 4rem;
  height: 8rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
}
.text {
  color: #909090;
  font-size: 1.8rem;
}
.formContainer {
  display: flex;
  align-items: center;
  position: relative;
}

.inputSearch {
  padding: 1rem;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 50rem;
}

.buttonSearch {
  cursor: pointer;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #8e36b7;
  background-image: url("../../assets/ico-search.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  right: 0;
}
</style>
