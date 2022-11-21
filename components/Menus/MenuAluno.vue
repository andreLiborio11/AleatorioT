<template>
  <div>
    <div class="loggedin-header-mobile">
      <img src="/img/logo-roxa.svg" alt="logo" class="logo" />
      <button id="btn-mobile" onClick={ToggleClass}>
        <div
          class="
            isActive icone-menu-mobile icone-menu-mobile ativo"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
    <nav class="isActive loggedin-menu loggedin-menu ativo">
      <img src="~/static/logo-roxa.svg" alt="logo" class="logo" />
      <ul class="menu-aluno">
        <li>
          <b-link href="/aluno/cursos" class="item-menu">
            <img src="~/static/icons/icone-tela-mouse-laranja.svg" alt="icone casa" />
            MEUS CURSOS
          </b-link>
        </li>
        <li>
          <b-link href="/aluno/certificados" class="item-menu">
            <img
              src="~/static/icons/icone-certificado-laranja.svg"
              alt="icone certificado"
            />
            CERTIFICADOS
          </b-link>
        </li>
        <li>
          <b-link href="/aluno/matriculas" class="item-menu">
            <img
              src="~/static/icons/icone-extrato-laranja.svg"
              alt="icone matricula"
            />
            MATRÍCULAS
          </b-link>
        </li>
        <li>
          <button class="item-menu">
            <img
              src="~/static/icons/icone-pilha-papeis-laranja.svg"
              alt="icone extrato"
            />
            TODOS OS CURSOS
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AleatorioMenuAluno',

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
