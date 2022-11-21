<template>
  <div>
    <section class="tutores bg-lilas-1 py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="mb-5 m-5">
              VEJA QUEM SÃO <br />
              OS SEUS TUTORES
            </h2>
          </div>
        </div>
        <div class="container">
          <div class="col-12">
            <div

              class="mySwiper row"
            >
              <div class="col-5 m-5">
                <div class="box-tutores text-center">
                  <img class="foto" src="~/static/foto-tutora.png" width="300px" alt="" />
                  <h5>Nome Tutora</h5>
                  <p>
                    Enfermeira pela Universidade Federal de São Paulo. Mestre em
                    ciências da saúde – UNIFESP. Trabalhou por 5 anos no
                    Einstein onde recebeu placa do Programa de Reconhecimento de
                    Líderes. Foi vice-presidente da Amparo Saúde. Fundadora do
                    grupo APS MasterMind.
                  </p>
                </div>
              </div>
              <div class="col-5  m-sm-5">
                <div class="box-tutores text-center">
                  <img class="foto" src="~/static/foto-tutora.png"  width="300px" alt="" />
                  <!--<h5 v-safe-html="mountains.title"></h5>
                  <p v-safe-html="mountains.title"></p>-->
                  <h5>Nome Tutora</h5>
                  <p>
                    Enfermeira pela Universidade Federal de São Paulo. Mestre em
                    ciências da saúde – UNIFESP. Trabalhou por 5 anos no
                    Einstein onde recebeu placa do Programa de Reconhecimento de
                    Líderes. Foi vice-presidente da Amparo Saúde. Fundadora do
                    grupo APS MasterMind.
                  </p>

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
  name: 'AleatorioTutorC',

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
