<template>
  <div>
    <div class="row">
      <div class="col-12 sessao-newsletter">
        <form class="box-branco row g-3 form-input-redondo">
          <div class="col-md-4 col-lg-3 col-xl-2">
            <p class="titulo">
              Fique por dentro de nossas atualizações
            </p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-4">
            <input type="password" id="nome" placeholder="Nome:"/>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-4">
            <input type="password" id="email" placeholder="E-mail:"/>
          </div>
          <div class="col-md-2 col-lg-3 col-xl-2 ">
            <button class="btn-verde">
              ASSINAR
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioNewsletter',

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
