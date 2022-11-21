<template>
  <div>
    <div class="box-total box-branco">
      <p class="cupom-titulo">Cupom aplicado</p>
      <p class="cupom-valor">R$ 18,00</p>
      <p class="titulo">TOTAL</p>
      <div class="preco-total">
        <p class="preco">R$ 18,00</p>
        <p>
          Pode ser parcelado em <br />
          até 26x de R$ 5,17 sem juros
        </p>
      </div>
      <b-link href="/aluno/carrinho" class="btn-lilas btn-ver-itens">
        VER PRODUTOS NO CARRINHO
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioTotalCarrinho',

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
