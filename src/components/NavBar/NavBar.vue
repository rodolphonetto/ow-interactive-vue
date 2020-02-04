<template>
  <div class="navBarContainer">
    <router-link to="/">
      <img src="../../assets/logo.png" alt="Logo da empresa" />
    </router-link>
    <span class="text">Produtos</span>
    <div class="cartContainer">
      <router-link to="/cart">
        <img class="cart" src="../../assets/cart.svg" alt />
      </router-link>
      <div class="productsNumber">{{ totalProductsOnCart }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    totalProductsOnCart() {
      return this.$store.getters.totalProductsOnCart
    }
  },
  created() {
    this.$store.dispatch("updateProductsOnCart")
  }
}
</script>

<style lang="scss" scoped>
.navBarContainer {
  padding: 0 25%;
  height: 8rem;
  display: grid;
  grid-template-columns: 7fr 1fr 1fr;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
.text {
  color: #909090;
  font-size: 2rem;
  grid-column: 2;
}

.cartContainer {
  position: relative;
  justify-self: start;
}

.cart {
  grid-column: 3;
  width: 3rem;
}

.productsNumber {
  font-size: 1.4rem;
  text-align: center;
  width: 1.8rem;
  height: 1.8rem;
  background-color: #f02f2f;
  color: white;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(0.5rem);
}
</style>
