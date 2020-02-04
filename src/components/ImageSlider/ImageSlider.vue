<template>
  <agile :autoplay="true" :dots="false" :navButtons="false">
    <div class="slide">
      <img src="../../assets/banner1.jpg" alt="Banner do Slider" />
    </div>
    <div class="slide">
      <img src="../../assets/banner2.jpg" alt="Banner do Slider" />
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile"
export default {
  components: {
    agile: VueAgile
  }
}
</script>

<style lang="scss" scoped>
.agile__actions {
  display: flex;
  justify-items: center;
}
</style>
