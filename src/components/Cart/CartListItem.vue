<template>
  <div class="productItem">
    <div class="productContainer">
      <button @click="$emit('del-prod', product.prodName)" class="deleteButton">
        <img
          class="buttonIcon"
          src="../../assets/garbage.svg"
          alt="Remover Produto"
        />
      </button>
      <span class="productCategory">Eletrônicos</span>
      <span class="productName">{{ product.prodName }}</span>
    </div>
    <div class="qtdContainer">
      <div @click="decreaseQtd" class="qtdDecrease">-</div>
      <input v-model="product.qtd" class="qtdValue" type="text" />
      <div @click="increaseQtd" class="qtdIncrease">+</div>
    </div>
    <div class="priceContainer">
      <span class="unPrice">{{ `R$ ${product.prodPrice}` }}</span>
      <span class="tenTimesPrice">{{ `à vista ou 10x de ${unTimes}` }}</span>
    </div>
    <div class="priceContainer">
      <span class="unPrice">{{ totalPrice }}</span>
      <span class="tenTimesPrice">{{ `à vista ou 10x de ${totalTimes}` }}</span>
    </div>
  </div>
</template>

<script>
import * as C from "../cart"

export default {
  name: "CartListItem",
  props: ["product"],
  computed: {
    productsOnCart() {
      return C.getProductsOnCart()
    },
    unTimes() {
      return (this.product.floatPrice / 10).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
    },
    totalPrice() {
      return (this.product.floatPrice * this.product.qtd).toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL"
        }
      )
    },
    totalTimes() {
      return ((this.product.floatPrice * this.product.qtd) / 10).toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL"
        }
      )
    }
  },
  methods: {
    decreaseQtd() {
      if (this.product.qtd > 0) {
        this.product.qtd--
        C.changeQtd(
          this.productsOnCart,
          this.product.prodName,
          this.product.qtd
        )
        this.$store.dispatch("updateProductsOnCart")
      }
    },
    increaseQtd() {
      this.product.qtd++
      C.changeQtd(this.productsOnCart, this.product.prodName, this.product.qtd)
      this.$store.dispatch("updateProductsOnCart")
    }
  }
}
</script>

<style lang="scss" scoped>
.productItem {
  height: 15rem;
  padding: 1rem 0;
  border-bottom: 1px solid #aaaaaa;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}

.productContainer {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}
.deleteButton {
  cursor: pointer;
  background: none;
  border: none;
  grid-row: 2;
  justify-self: center;
  align-self: center;
}
.buttonIcon {
  height: 3rem;
}
.productCategory {
  grid-column: 2;
  font-size: 1.4rem;
  color: #8e36b7;
  font-weight: bold;
}
.productName {
  grid-column: 2;
  color: #434343;
  font-weight: bold;
  font-size: 1.6rem;
}
.qtdContainer {
  height: 3rem;
  display: flex;
}
.qtdDecrease {
  cursor: pointer;
  border: 1px solid black;
  background: none;
  width: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qtdValue {
  width: 3rem;
  height: 100%;
  text-align: center;
  border: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.qtdIncrease {
  cursor: pointer;
  border: 1px solid black;
  background: none;
  width: 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.unPrice {
  color: #434343;
  font-weight: bold;
  font-size: 1.6rem;
  margin-right: 1rem;
}
.tenTimesPrice {
  color: #434343;
  font-size: 1.6rem;
}
</style>
