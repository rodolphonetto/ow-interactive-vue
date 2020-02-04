# Desafio FrontEnd - OW Interactive - vue

**_Observações_**: Eu refiz o desafio usando o vue.js ao invés do react conforme é proposto pelo mesmo. Apenas a responsividade e a barra de busca não foram feitos por uma questão de tempo, foquei mais no que era necessário usar vue ao invés de css e js padrão. A principio apesar de ser um primeiro contato com o vue gostei bastante de como ele funciona e achei muito mais simples e objetivo do que o React.

## Libs Utilizadas

- **Axios** - Para fazer as requisições http e receber os dados da API.
- **vue-agile** - Componente que entrega o slider da pagina home
- **vue-the-mask** - Criação das mascaras no formulário do checkout
- **vuelidate** - Responsável por validar o formulário do checkout
- **vuex** - Usado para gerenciar um estado global na aplicação, apesar de ser um pouco de "exagero" usar o vuex apenas pra manipular o contador do carrinho na navbar que recebe atualização de dois componentes distintos eu resolvi usar para ver como ele funciona e é bem mais simples que redux e até o contextAPI do React.
