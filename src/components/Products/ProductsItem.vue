<template>
  <div class="cardContainer">
    <div
      :style="{ 'background-image': `url(${product.picture})` }"
      class="image"
    ></div>
    <div class="infosBlock">
      <span class="category">Eletrônicos</span>
      <span class="name">{{ product.name }}</span>
      <p class="description">
        Lorem ipsum dolor sit amet, cons ctetur adipiscing elit. Etiam pell sit
        amet, cons
      </p>
      <span class="price">{{ `R$ ${product.price}` }}</span>
    </div>
    <button
      v-if="!itemOnCart"
      class="buyButton"
      @click="$emit('add-prod', product.name, product.price)"
    >
      Adicionar ao carrinho
    </button>
    <div class="onCart" v-else>Produto já no carrinho</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product", "productsOnCart"],
  computed: {
    itemOnCart() {
      return this.productsOnCart.some(p => p.prodName === this.product.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.cardContainer {
  height: 45rem;
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
.image {
  background-image: url("https://i.ibb.co/gr7cdV1/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20rem;
  width: 65%;
}
.infosBlock {
  width: 100%;
  padding: 2rem 2rem 0 2rem;
  display: grid;
  grid-template-rows: 0.5fr 2fr 1fr 1fr;
  height: 50%;
  border-bottom: 1px solid #aaaaaa;
}
.category {
  font-size: 1.2rem;
  color: #8e36b7;
  font-weight: bold;
}
.name {
  color: #434343;
  font-weight: bold;
  font-size: 1.6rem;
}
.description {
  color: #909090;
  font-size: 1.2rem;
}
.price {
  margin: 1rem 0;
  color: #434343;
  font-weight: bold;
  font-size: 2rem;
}

.buyButton {
  width: 100%;
  height: 15%;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  background: none;
  color: #8e36b7;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}
.buyButton:hover {
  cursor: pointer;
  background-color: #8e36b7;
  color: white;
}

.onCart {
  width: 100%;
  height: 15%;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  background: none;
  background-color: #dadada;
  color: #a0a0a0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}
.onCart:hover {
  cursor: not-allowed;
}
</style>
