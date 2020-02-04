<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
}
</style>
