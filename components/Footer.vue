<template>
  <div>
    <footer>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-3 d-flex flex-wrap justify-content-center '>
            <b-link class='logo' to='/'><img src='~/static/logo-roxa.svg' /></b-link>
            <div class='social-midias'>
              <a to={facebook} target='_blank' rel='noreferrer'>
                <img src='~/static/icons/icone-social-facebook-roxa.svg' alt='' />
              </a>
              <a to={instagram} target='_blank' rel='noreferrer'>
                <img src='~/static/icons/icone-social-instagram-roxa.svg' alt='' />
              </a>
              <a to={twitter} target='_blank' rel='noreferrer'>
                <img src='~/static/icons/icone-social-twitter-roxa.svg' alt='' />
              </a>
            </div>
          </div>
          <div class='col-7 col-sm-4 col-lg-3 col-xl-2 offset-xl-1 py-3'>
            <h6>Institucional</h6>
            <ul>
              <li><b-link class="linkFoorter" to="/Intistucional/Quem-Somos">Quem somos</b-link></li>
              <li><b-link class="linkFoorter" to="/Intistucional/Politica-De-Privacidade">Política de privacidade</b-link></li>
              <li><b-link class="linkFoorter" to="/tutor/Home-tutor">Área do tutor</b-link></li>
              <li><b-link class="linkFoorter" to="/Servicos/Quero-Ser-Tutor">Quero ser tutor</b-link></li>
            </ul>
          </div>
          <div class='col-5 col-sm-4 col-lg-3 col-xl-2 offset-xl-1 py-3'>
            <h6>AJUDA</h6>
            <ul>
              <li><b-link class="linkFoorter" to="/Servicos/Como-Funcionar">Como funciona</b-link></li>
              <li><b-link class="linkFoorter" to="/Servicos/FAQ">Dúvidas comuns</b-link></li>
              <li><b-link class="linkFoorter" to="/Servicos/Atendimento">Atendimento</b-link></li>
            </ul>
          </div>
          <div class='col-12 col-sm-4 col-lg-3 py-3'>
            <h6>SERVIÇOS</h6>
            <ul>
              <li><b-link class="linkFoorter" to="/Intistucional/Confiabilidade">Confiabilidade</b-link></li>
              <li><b-link class="linkFoorter" to="/Servicos/Verificar-Autenticidade">Verificar Autenticidade do Certificado</b-link></li>
              <li><b-link class="linkFoorter" to="/Intistucional/Termos-de-compromisso">Termo de Compromisso</b-link></li>
              <li><b-link class="linkFoorter" to="">Ambiente de Treinamentos</b-link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AleatorioFooter',

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
