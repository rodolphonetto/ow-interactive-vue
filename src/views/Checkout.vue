<template>
  <Container>
    <CheckoutForm />
  </Container>
</template>

<script>
import Container from "../components/Container/Container"
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"
export default {
  name: "Checkout",
  components: {
    Container,
    CheckoutForm
  }
}
</script>

<style lang="scss" scoped></style>
