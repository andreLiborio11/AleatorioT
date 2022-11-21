<template>
  <div>
    <section class="cabecalho">
      <div class="container">
        <header class="institucional">
          <b-link href="/" class="logo">
            <img src="~/static/logo-roxa.svg" alt="" />
          </b-link>
          <nav>
            <ul class="isActive  menu  menu ativo">
              <div class="">
                <li>
                  <b-link href="/Intistucional/Quem-Somos">INSTITUCIONAL</b-link>
                </li>
                <li>
                  <b-link href="/servicos/Atendimento">AJUDA</b-link>
                </li>
                <li>
                  <b-link href="/servicos/Faq">SERVIÇOS</b-link>
                </li>
                <li>
                  <b-link href="/cursos/Cursos">CURSOS ONLINE</b-link>
                </li>
                <li>
                  <b-link href="/vip/Acesso-Vip">PLANO VIP</b-link>
                </li>
                <li>
                  <b-link href="/blog/blog">BLOG</b-link>
                </li>
              </div>
            </ul>
          </nav>
          <div class="botoes">
            <b-link to="/Aluno/Login/Login" class="btn-borda-verde">
              <img src="~/static/icons/icone-user-roxo.svg" alt="" />
              JÁ SOU ALUNO
            </b-link>
            <b-link href="/Aluno/Login/cadastrar" class="btn-verde">
              FAZER CADASTRO
            </b-link>
            <b-link to="/carrinho/Carrinho" class="carrinho">
              <span>3</span>
              <img src="~/static/icons/icone-carrinho-roxo.svg" alt="" />
            </b-link>
            <button id="btn-mobile" onClick={ToggleClass}>
              <div
                class="isActive icone-menu-mobile icone-menu-mobile ativo"
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </div>
          <div class="box-login-mobile">
            <InputPesquisar />
            <b-link href="/Aluno/Login/Login" class="btn-borda-verde">
              <img src="~/static/icons/icone-user-roxo.svg" alt="" />
              JÁ SOU ALUNO
            </b-link>
            <b-link href="/login/cadastrar" class="btn-verde">
              FAZER CADASTRO
            </b-link>
          </div>
        </header>
      </div>
    </section>
    <div class="margem-topo"></div>
  </div>
</template>

<script>
export default {
  name: 'AleatorioHeader',

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
