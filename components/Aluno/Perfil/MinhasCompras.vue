<template>
  <div>
    <div class="row justify-content-center sessao-minhas-compras py-1">
      <div class="col-lg-11 col-xl-9">
        <h3 class="text-center">MINHAS COMPRAS</h3>
        <div class="compras box-lilas">
            <div class="compra box-branco" key={index}>
              <p class="titulo">Curso</p>
              <p>
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <div class="informacoes">
                <div class="info">
                  <p class="titulo">Status</p>
                  <p class="tag tag-verde">Pago</p>
                </div>
                <div class="info">
                  <p class="titulo">Data do Pagamento</p>
                  <p>02/05/2022</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioMinhasCompras',

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
