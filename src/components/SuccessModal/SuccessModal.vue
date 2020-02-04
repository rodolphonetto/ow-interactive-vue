<template>
  <div class="backgroundContainer">
    <div class="modalContainer">
      <img
        class="icon"
        src="../../assets/sucessIcon.svg"
        alt="Image de sucesso"
      />
      <div class="textMessage">Seu Cadastro foi solicitado com sucesso!</div>
      <router-link to="/">
        <div class="backButtonContainer">
          <img
            class="iconBackButton"
            src="../../assets/left-arrow.svg"
            alt="Icone Seta para voltar"
          />
          <span class="textBackButton">Voltar para a home</span>
        </div>
      </router-link>
      <router-link to="/">
        <div class="closeButton">X</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModal"
}
</script>

<style lang="scss" scoped>
.backgroundContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.modalContainer {
  height: 35rem;
  width: 55rem;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  position: relative;
}

.icon {
  width: 8rem;
}

.textMessage {
  margin-top: 4rem;
  color: #434343;
  font-size: 2.4rem;
}

.backButtonContainer {
  cursor: pointer;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.textBackButton {
  color: #8e36b7;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
}

.iconBackButton {
  width: 2rem;
  margin-right: 0.5rem;
}

.closeButton {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #434343;
}
</style>
