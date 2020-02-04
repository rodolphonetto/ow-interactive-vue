<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Source Sans Pro", sans-serif;
  &::selection {
    color: white;
    background: #8e36b7;
  }
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  font-family: "Source Sans Pro", sans-serif;
}
p,
span,
a {
  &::selection {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    background: #8e36b7;
  }
}
</style>
