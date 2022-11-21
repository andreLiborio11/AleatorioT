<template>
  <div>
    <header class="loggedin-header">
      <ul class="header-tutor">
        <li>
          <Link href="/tutor" class="item-menu ativo">
            <img src="~/static/icons/icone-casa-roxa.svg" alt="icone  home" />
          </Link>
        </li>
        <li>
          <button class="item-menu">
            <img src="~/static/icons/icone-notebook-roxo.svg" alt="icone note" />
          </button>
        </li>
        <li>
          <button class="item-menu">
            <img src="~/static/icons/icone-user-roxo.svg" alt="icone usuario" />
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AleatorioHeaderTutor',

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
