<template>
  <div>
    <header class="loggedin-header">
      <ul class="header-aluno">
        <li>
          <b-link
            class="item-menu ativo"

          >
            <img src="~/static/icons/icone-casa-roxa.svg" alt="icone casa" />
            <span>HOME</span>
          </b-link>
        </li>
        <li>
          <button class="item-menu" onClick={ToggleClass}>
            <img src="~/static/icons/icone-lupa-roxa.svg" alt="icone lupa" />
            <span>PESQUISAR</span>
          </button>

        </li>
        <li>
          <b-link href="/carrinho-ofertas-plus" class="item-menu">
            <img src="~/static/icons/icone-carrinho-roxo.svg" alt="icone carrinho" />
            <span>CARRINHO</span>
          </b-link>
        </li>
        <li>
          <b-link href="/aluno/conta" class="item-menu">
            <img src="~/static/icons/icone-user-roxo.svg" alt="icone usuario" />
            <span>PERFIL</span>
          </b-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AleatorioHeaderAluno',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
