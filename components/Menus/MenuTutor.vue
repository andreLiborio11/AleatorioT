<template>
  <div>
    <div class="loggedin-header-mobile">
      <img src="~/static/logo-roxa.svg" alt="logo" class="logo" />
      <button id="btn-mobile" onClick={ToggleClass}>
        <div
          class="icone-menu-mobile icone-menu-mobile ativo"

        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
    <nav class="loggedin-menu loggedin-menu ativo">
      <img src="~/static/logo-roxa.svg" alt="logo" class="logo" />
      <ul class="menu-tutor">
        <li>
          <b-link href="/tutor" class="item-menu">
            <img src="~/static/icons/icone-casa-laranja.svg" alt="icone casa" />
            HOME
          </b-link>
        </li>
        <li>
          <b-link href="/tutor/cursos" class="item-menu">
            <img
              src="~/static/icons/icone-tela-mouse-laranja.svg"
              alt="icone cursos"
            />
            MEUS CURSOS
          </b-link>
        </li>
        <li>
          <b-link href="/tutor/extrato" class="item-menu">
            <img
              src="~/static/icons/icone-extrato-laranja.svg"
              alt="icone de extrato"
            />
            EXTRATO
          </b-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AleatorioMenuTutor',

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
