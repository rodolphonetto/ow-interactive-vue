<template>
  <button class="button" :class="{ buttonFinish: finish }">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "finish"]
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  padding: 2rem 6rem;
  max-height: 6rem;
  max-width: 35rem;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #cfcfcf;
  color: #434343;
  justify-self: end;
}
.buttonFinish {
  margin-left: 4rem;
  background-color: #8e36b7;
  color: white;
  grid-column: 2;
}
</style>
