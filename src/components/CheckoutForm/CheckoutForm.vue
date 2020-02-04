<template>
  <div>
    <SuccessModal v-if="showModal" />
    <form class="formContainer">
      <div class="fieldsContainer">
        <div class="inputContainer">
          <label class="inputLabel" for="fname">Nome*</label>
          <input
            class="inputField"
            id="fname"
            v-model.lazy="$v.formResponses.nome.$model"
            type="text"
            placeholder="João da Silva"
          />
          <p v-if="errors" class="error">
            <span class="error" v-if="!$v.formResponses.nome.required">
              Este campo é obrigatório!
            </span>
          </p>
        </div>
        <div class="inputContainer">
          <label class="inputLabel" for="email">Email*</label>
          <input
            class="inputField"
            id="email"
            v-model.lazy="$v.formResponses.email.$model"
            type="text"
            placeholder="joao@dasilva.com.br"
          />
          <p v-if="errors" class="error">
            <span class="error" v-if="!$v.formResponses.email.required">
              Este campo é obrigatório!<br />
            </span>
          </p>
          <span class="error" v-if="!$v.formResponses.email.email">
            Preencha com um e-mail valido
          </span>
        </div>
        <div class="inputContainer">
          <label class="inputLabel" for="cpf">CPF*</label>
          <input
            class="inputField"
            id="cpf"
            v-model.lazy="$v.formResponses.cpf.$model"
            type="text"
            v-mask="'###.###.###-##'"
            placeholder="111.111.111-11"
          />
          <p v-if="errors" class="error">
            <span class="error" v-if="!$v.formResponses.cpf.required">
              Este campo é obrigatório!<br />
            </span>
            <span class="error" v-if="!$v.formResponses.cpf.validCPF">
              Preencha com um cpf valido 123.123.123-12
            </span>
          </p>
        </div>
        <div class="lineInputContainer">
          <div class="inputContainer">
            <label class="inputLabel" for="data">Data de Nascimento*</label>
            <input
              class="inputField inputFieldHalf"
              id="data"
              v-model.lazy="$v.formResponses.data.$model"
              type="text"
              placeholder="01/01/1991"
              v-mask="'##/##/####'"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.data.required">
                Este campo é obrigatório!<br />
              </span>
              <span class="error" v-if="!$v.formResponses.data.validData">
                Preencha com uma data valida 01/01/2000
              </span>
            </p>
          </div>
          <div class="inputContainer">
            <label class="inputLabel" for="telefone">Telefone*</label>
            <input
              class="inputField inputFieldHalf"
              id="telefone"
              v-model.lazy="$v.formResponses.telefone.$model"
              type="tel"
              v-mask="'###########'"
              placeholder="16999999999"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.telefone.required">
                Este campo é obrigatório!<br />
              </span>
              <span
                class="error"
                v-if="!$v.formResponses.telefone.validTelefone"
              >
                Preencha com um telefone valido
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="fieldsContainer">
        <div class="inputContainer">
          <label class="inputLabel" for="cep">CEP*</label>
          <input
            class="inputField"
            id="cep"
            v-model.lazy="$v.formResponses.cep.$model"
            type="text"
            v-mask="'#####-###'"
            placeholder="14140-000"
          />
          <p v-if="errors" class="error">
            <span class="error" v-if="!$v.formResponses.cep.required">
              Este campo é obrigatório!
            </span>
            <span class="error" v-if="!$v.formResponses.cep.validCep">
              Preencha com um cep valido 00000-000
            </span>
          </p>
        </div>
        <div class="lineInputContainer">
          <div class="inputContainer">
            <label class="inputLabel" for="logradouro">Endereço*</label>
            <input
              class="inputField inputFieldHalf"
              id="logradouro"
              v-model.lazy="$v.formResponses.logradouro.$model"
              type="text"
              placeholder="Rua Do Centro"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.logradouro.required">
                Este campo é obrigatório!
              </span>
            </p>
          </div>
          <div class="inputContainer">
            <label class="inputLabel" for="numero">Numero*</label>
            <input
              class="inputField inputFieldHalf"
              id="numero"
              v-model.lazy="$v.formResponses.numero.$model"
              type="text"
              placeholder="10"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.numero.required">
                Este campo é obrigatório!
              </span>
              <span class="error" v-if="!$v.formResponses.numero.validNumero">
                Preencha apenas com numeros
              </span>
            </p>
          </div>
        </div>
        <div class="lineInputContainer">
          <div class="inputContainer">
            <label class="inputLabel" for="complemento">Complemento</label>
            <input
              class="inputField inputFieldHalf"
              id="complemento"
              v-model.lazy="formResponses.complemento"
              type="text"
              placeholder="Casa"
            />
          </div>
          <div class="inputContainer">
            <label class="inputLabel" for="bairro">Bairro*</label>
            <input
              class="inputField inputFieldHalf"
              id="bairro"
              v-model.lazy="$v.formResponses.bairro.$model"
              type="text"
              placeholder="Centro"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.bairro.required">
                Este campo é obrigatório!
              </span>
            </p>
          </div>
        </div>
        <div class="lineInputContainer">
          <div class="inputContainer">
            <label class="inputLabel" for="cidade">Cidade*</label>
            <input
              class="inputField inputFieldHalf"
              id="cidade"
              v-model.lazy="$v.formResponses.cidade.$model"
              type="text"
              placeholder="Cravinhos"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.cidade.required">
                Este campo é obrigatório!
              </span>
            </p>
          </div>
          <div class="inputContainer">
            <label class="inputLabel" for="estado">Estado*</label>
            <input
              class="inputField inputFieldHalf"
              id="estado"
              v-model.lazy="$v.formResponses.estado.$model"
              type="text"
              placeholder="SP"
            />
            <p v-if="errors" class="error">
              <span class="error" v-if="!$v.formResponses.estado.required">
                Este campo é obrigatório!
              </span>
            </p>
          </div>
        </div>
      </div>
      <section class="submitContainer">
        <button
          @click.prevent="submitForm"
          type="submit"
          text="Concluir compra"
          :finish="true"
          class="buttonSubmit"
        >
          Concluir Compra
        </button>
        <p v-if="errors" class="error">
          O formulário contem erros, por favor verifique.
        </p>
        <p
          v-else-if="formTouched && uiState === 'submit clicked'"
          class="error"
        >
          O formulário está em branco, por favor verifique
        </p>
      </section>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import { required, email } from "vuelidate/lib/validators"
import SuccessModal from "../SuccessModal/SuccessModal"

export default {
  name: "CheckoutForm",
  components: { SuccessModal },
  data() {
    return {
      uiState: "submit not clicked",
      formTouched: false,
      errors: false,
      empty: true,
      showModal: false,
      formResponses: {
        nome: "",
        email: "",
        cpf: "",
        data: "",
        telefone: "",
        cep: "",
        complemento: "",
        numero: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: ""
      }
    }
  },
  computed: {
    cep() {
      return this.formResponses.cep
    }
  },
  watch: {
    async cep(valor) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${valor}/json/`
      )
      this.formResponses.logradouro = response.data.logradouro
      this.formResponses.bairro = response.data.bairro
      this.formResponses.cidade = response.data.localidade
      this.formResponses.estado = response.data.uf
    }
  },
  methods: {
    submitForm() {
      this.formTouched = !this.$v.formResponses.$anyDirty
      this.errors = this.$v.formResponses.$anyError
      this.uiState = "submit clicked"
      if (this.errors === false && this.formTouched === false) {
        this.showModal = true
      }
    }
  },
  validations: {
    formResponses: {
      nome: {
        required
      },
      email: {
        required,
        email
      },
      cpf: {
        required,
        validCPF(cpf) {
          return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)
        }
      },
      data: {
        required,
        validData(data) {
          return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(
            data
          )
        }
      },
      telefone: {
        required,
        validTelefone(telefone) {
          return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/.test(
            telefone
          )
        }
      },
      cep: {
        required,
        validCep(cep) {
          return /[0-9]{5}-[\d]{3}/.test(cep)
        }
      },
      logradouro: {
        required
      },
      numero: {
        required,
        validNumero(numero) {
          return /[0-9]/.test(numero)
        }
      },
      bairro: {
        required
      },
      cidade: {
        required
      },
      estado: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.formContainer {
  margin-top: 15rem;
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  height: 58rem;
}

.fieldsContainer {
  width: 100%;
}

.inputContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.lineInputContainer {
  display: flex;
  justify-content: space-between;
}

.inputLabel {
  display: block;
  color: #434343;
  font-size: 1.8rem;
}

.inputField {
  padding: 0.5rem 1rem;
  width: 50rem;
  border: 1px solid #909090;
  font-size: 1.8rem;
  &::placeholder {
    color: #cfcfcf;
    font-size: 1.2rem;
  }
}

.inputFieldHalf {
  width: 20rem;
}

.submitContainer {
  grid-column: 2;
  justify-self: end;
}

.buttonSubmit {
  cursor: pointer;
  padding: 2rem 6rem;
  max-height: 6rem;
  max-width: 35rem;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;

  background-color: #8e36b7;
  color: white;
}

.error {
  font-size: 1.4rem;
  color: red;
}
</style>
