<template>
  <div class="cartContainer">
    <div class="listItem">
      <span class="title">Produto</span>
      <span class="title">Quantidade</span>
      <span class="title">Valor Un</span>
      <span class="title">Total</span>
    </div>
    <CartListItem
      :product="product"
      :key="product.prodName"
      v-for="product in allProductsFloatPrice"
      @del-prod="deleteProduct"
    />
    <div class="totalsContainer">
      <span class="title">Total à Vista</span>
      <span class="title title--total">{{
        totalCartPrice.cartTotalPriceMoney
      }}</span>
    </div>
    <div class="totalsContainer">
      <div class="title">Total à prazo</div>
      <div class="title title--totalPrazo">{{ totalCartPriceTimes }}</div>
    </div>
    <div class="footerContainer">
      <button @click="cleanProductsCart" class="cleanCart">
        <img src="../../assets/garbage.svg" alt="Limpar Carrinho" />
        Limpar Carrinho
      </button>
      <div class="buttonsContainer">
        <router-link to="/">
          <Button :text="'Continuar Comprando'" />
        </router-link>
        <router-link to="/checkout">
          <Button :text="'Concluir Compra'" :finish="true" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as C from "../cart"

import CartListItem from "./CartListItem"
import Button from "../Button/Button"

export default {
  name: "CartList",
  data() {
    return {
      allProductsFloatPrice: []
    }
  },
  components: {
    CartListItem,
    Button
  },
  created() {
    const productsOnCart = C.getProductsOnCart()
    const floatPrice = productsOnCart.map(prod => {
      return {
        ...prod,
        floatPrice: parseFloat(
          prod.prodPrice.replace(".", "").replace(",", ".")
        )
      }
    })
    this.allProductsFloatPrice = floatPrice
  },
  computed: {
    totalCartPrice() {
      const productTotalPrice = this.allProductsFloatPrice.map(p => {
        return { ...p, totalPrice: p.floatPrice * p.qtd }
      })
      const cartTotalPrice = productTotalPrice.reduce(
        (prev, cur) => prev + cur.totalPrice,
        0
      )
      const cartTotalPriceString = cartTotalPrice.toFixed(2).replace(".", ",")
      const cartTotalPriceMoney = cartTotalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
      const price = {
        cartTotalPriceString,
        cartTotalPriceMoney
      }
      return price
    },
    totalCartPriceTimes() {
      const total = (
        parseFloat(
          this.totalCartPrice.cartTotalPriceString
            .replace(".", "")
            .replace(",", ".")
        ) / 10
      ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      return total
    }
  },
  methods: {
    deleteProduct(name) {
      C.removeProduct(this.allProductsFloatPrice, name)
      this.allProductsFloatPrice = C.getProductsOnCart()
      this.$store.dispatch("updateProductsOnCart")
    },
    cleanProductsCart() {
      C.cleanCart()
      this.allProductsFloatPrice = C.getProductsOnCart()
      this.$store.dispatch("updateProductsOnCart")
    }
  }
}
</script>

<style lang="scss" scoped>
.cartContainer {
  grid-column: 1 / -1;
  margin-top: 8rem;
  min-height: 69vh;
}
.listItem {
  height: 15rem;
  padding: 1rem 0;
  border-bottom: 1px solid #aaaaaa;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}

.title {
  display: block;
  color: "#434343";
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
  &--total {
    color: #8e36b7;
    margin-left: 2rem;
  }
  &--totalPrazo {
    margin-left: 2rem;
  }
}
.cleanCart {
  cursor: pointer;
  justify-self: start;
  width: 15rem;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 2.5rem;
  }
}
.totalsContainer {
  display: flex;
  justify-content: flex-end;
  margin: 4rem 0;
}
.buttonsContainer {
  display: flex;
}
.footerContainer {
  border-top: 1px solid #aaaaaa;
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
}
</style>
