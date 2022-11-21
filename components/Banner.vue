<template>
  <div>
    <section class="banner-topo">
      <div class="container">
        <div class="row pt-5">
          <div class="col-lg-6">
            <InputPesquisar />
            <h1 v-safe-html="mountains.title"></h1>
            <p v-safe-html="mountains.description"></p>
            <b-link class="btn-verde" v-safe-html="mountains.btnCallToAction.text" to="/Cursos/Cursos"></b-link>
          </div>
          <div class="col-lg-6">
            <img class="foto-enfermeiras img-fluid" src="~/static/enfermeiras.png" alt="foto de três enfermeiras" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ConfigData from '~/Data/ConfigData';
export default {
  name: 'AleatorioBanner',

  data() {
    return {
      mountains: []
    };
  },
  async fetch() {
    this.mountains = await fetch(`${ConfigData.dataURL}/components/hero.json`
    ).then(res => res.json())
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
