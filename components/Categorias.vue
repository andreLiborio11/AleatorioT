<template>
  <div>
    <section class="categorias py-5 bg-branco-1">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>
              <span>Encontre seu curso</span>
              <br />
              NOSSAS CATEGORIAS
            </h2>
          </div>
        </div>
        <div class="">
          <div class="col-12">
            <div
              class="slides-categorias row"
            >
                <div class="box-categorias col-4">
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-maleta-roxa.svg" alt="" />
                    </div>
                    <h6>Socorro</h6>
                  </div>
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-band-aid-roxo.svg" alt="" />
                    </div>
                    <h6>Estomaterapia</h6>
                  </div>
                </div>
                <div class="box-categorias col-4">
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-equipe-roxo.svg" alt="" />
                    </div>
                    <h6>Coletiva</h6>
                  </div>
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-bebe-roxo.svg" alt="" />
                    </div>
                    <h6>Pediatria</h6>
                  </div>
                </div>
                <div class="box-categorias col-4">
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-ultero-doente-roxo.svg" alt="" />
                    </div>
                    <h6>UTI</h6>
                  </div>
                  <div class="categoria m-2">
                    <div class="icone">
                      <img src="~/static/icons/icone-medicamentos-roxo.svg" alt="" />
                    </div>
                    <h6>Medicamentos</h6>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AleatorioCategorias',

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
