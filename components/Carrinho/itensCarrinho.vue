<template>
  <div>
    <div class="box-itens-carrinho box-branco">
      <h6 class="text-center">ITENS DO CARRINHO</h6>
      <div class="itens">
          <div class="item" key={index}>
            <img
              class="thumb-curso"
              src="~/static/senhora-medica-2.png"
              alt="thumb curso"
            />
            <div class="info">
              <p class="titulo">
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <p class="preco">R$ 18,00</p>
              <button class="excluir">
                <img src="~/static/icons/icone-lixeira-cinza.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="item" key={index}>
            <img
              class="thumb-curso"
              src="~/static/senhora-medica-2.png"
              alt="thumb curso"
            />
            <div class="info">
              <p class="titulo">
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <p class="preco">R$ 18,00</p>
              <button class="excluir">
                <img src="~/static/icons/icone-lixeira-cinza.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="item" key={index}>
            <img
              class="thumb-curso"
              src="~/static/senhora-medica-2.png"
              alt="thumb curso"
            />
            <div class="info">
              <p class="titulo">
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <p class="preco">R$ 18,00</p>
              <button class="excluir">
                <img src="~/static/icons/icone-lixeira-cinza.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="item" key={index}>
            <img
              class="thumb-curso"
              src="~/static/senhora-medica-2.png"
              alt="thumb curso"
            />
            <div class="info">
              <p class="titulo">
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <p class="preco">R$ 18,00</p>
              <button class="excluir">
                <img src="~/static/icons/icone-lixeira-cinza.svg" alt="" />
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioItensCarrinho',

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
