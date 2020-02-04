<template>
  <div>
    <Slider />
    <Container>
      <Products :products="products" />
    </Container>
  </div>
</template>

<script>
import axios from "axios"

import Container from "../components/Container/Container"
import Products from "../components/Products/Products"
import Slider from "../components/ImageSlider/ImageSlider"

export default {
  name: "Home",
  data() {
    return {
      products: []
    }
  },
  components: {
    Container,
    Products,
    Slider
  },
  async created() {
    const response = await axios.get("https://api.myjson.com/bins/9e9fl")
    this.products = response.data
  }
}
</script>
