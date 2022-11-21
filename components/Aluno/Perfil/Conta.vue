<template>
  <div>
    <div class="row justify-content-center sessao-minha-conta align-items-center py-1">
      <div class="col-md-8 col-lg-6 col-xl-5 d-flex flex-wrap justify-content-center text-center">
        <div>  <h3 class="text-center">MINHA CONTA</h3>
        <div class="box-menu text-center">
          <b-link href="/aluno/perfil" class="item box-branco botao">
            <img
              src="~/static/icons/icone-user-lista-laranja.svg"
              alt="icone meu perfil"
            />
            <h6>
              MEU <br /> PERFIL
            </h6>
          </b-link>
          <b-link href="/aluno/compras" class="item box-branco botao">
            <img
              src="~/static/icons/icone-carrinho-laranja.svg"
              alt="icone meu perfil"
            />
            <h6>
              MINHAS <br />
              COMPRAS
            </h6>
          </b-link>
          <b-link href="/aluno/matriculas" class="item box-branco botao">
            <img src="~/static/icons/icone-prova-laranja.svg" alt="icone meu perfil" />
            <h6>
              MINHA <br /> MATRÍCULAS
            </h6>
          </b-link>
          <b-link href="/aluno/alterar/senha" class="item box-branco botao">
            <img
              src="~/static/icons/icone-cadeado-laranja.svg"
              alt="icone meu perfil"
            />
            <h6>
              ALTERAR <br /> SENHA
            </h6>
          </b-link>
          <b-link href="/" class="btn-sair btn-branco">
            <img src="~/static/icons/icone-porta-laranja.svg" alt="" /> Sair
          </b-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioConta',

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
