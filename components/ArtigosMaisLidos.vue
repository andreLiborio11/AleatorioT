<template>
  <div>
    <div class="mais-lidos box-lilas">
      <h6 class="text-center">Mais lidos</h6>
      <div class="artigos-mais-lidos">
        <div class="artigo-mais-lido box-branco">
          <img
            src="~/static/equipe.png"
            alt="thumb artigo"
            class="thumb-artigo"
          />
          <p class="titulo">
            Vitória histórica para os profissionais de Enfermagem
          </p>
          <b-link class="btn-borda-verde">Leia Mais</b-link>
        </div>
        <div class="artigo-mais-lido box-branco">
          <img
            src="~/static/equipe.png"
            alt="thumb artigo"
            class="thumb-artigo"
          />
          <p class="titulo">
            Vitória histórica para os profissionais de Enfermagem
          </p>
          <b-link class="btn-borda-verde">Leia Mais</b-link>
        </div>
        <div class="artigo-mais-lido box-branco">
          <img
            src="~/static/equipe.png"
            alt="thumb artigo"
            class="thumb-artigo"
          />
          <p class="titulo">
            Vitória histórica para os profissionais de Enfermagem
          </p>
          <b-link class="btn-borda-verde">Leia Mais</b-link>
        </div>
      </div>
      <div
        slidesPerView={1}
        pagination={pagination}
        navigation={true}
        modules={[Navigation, Pagination]}
        class="slides-artigos-mais-lidos"
      >
        <div>
          <div class="artigo-interessante box-branco">
            <img
              src="~/static/medica-paciente.png"
              alt="thumb artigo"
              class="thumb-artigo"
            />
            <p class="titulo">
              Vitória histórica para os profissionais de Enfermagem
            </p>
            <b-link class="btn-borda-verde">Leia Mais</b-link>
          </div>
        </div>
        <div>
          <div class="artigo-interessante box-branco">
            <img
              src="~/static/medica-paciente.png"
              alt="thumb artigo"
              class="thumb-artigo"
            />
            <p class="titulo">
              Vitória histórica para os profissionais de Enfermagem
            </p>
            <b-link class="btn-borda-verde">Leia Mais</b-link>
          </div>
        </div>
        <div>
          <div class="artigo-interessante box-branco">
            <img
              src="~/static/medica-paciente.png"
              alt="thumb artigo"
              class="thumb-artigo"
            />
            <p class="titulo">
              Vitória histórica para os profissionais de Enfermagem
            </p>
            <b-link class="btn-borda-verde">Leia Mais</b-link>
          </div>
        </div>
        <div>
          <div class="artigo-interessante box-branco">
            <img
              src="~/static/medica-paciente.png"
              alt="thumb artigo"
              class="thumb-artigo"
            />
            <p class="titulo">
              Vitória histórica para os profissionais de Enfermagem
            </p>
            <b-link class="btn-borda-verde">Leia Mais</b-link>
          </div>
        </div>
        <div>
          <div class="artigo-interessante box-branco">
            <img
              src="~/static/medica-paciente.png"
              alt="thumb artigo"
              class="thumb-artigo"
            />
            <p class="titulo">
              Vitória histórica para os profissionais de Enfermagem
            </p>
            <b-link class="btn-borda-verde">Leia Mais</b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioArtigosMaisLidos',

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
