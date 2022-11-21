<template>
  <div>
    <div class="row justify-content-center py-5 sessao-matriculas gy-1">
      <div class="col-xl-10">
        <div class="box-lilas">
          <h3 class="text-center">MINHAS MATRÍCULAS</h3>
          <div class="matriculas py-3">
            <div class="matricula box-branco">
              <p class="titulo">Curso</p>
              <p>
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <div class="informacoes">
                <div class="info">
                  <p class="titulo">Matrícula</p>
                  <p>215811651</p>
                </div>
                <div class="info">
                  <p class="titulo">Data de inscrição</p>
                  <p>02/05/2022</p>
                </div>
                <div class="info">
                  <p class="titulo">Status</p>
                  <p class="tag tag-verde">Concluído</p>
                </div>
                <button class="btn-lilas">EMITIR DECLARAÇÃO</button>
              </div>
            </div>
            <div class="matricula box-branco">
              <p class="titulo">Curso</p>
              <p>
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <div class="informacoes">
                <div class="info">
                  <p class="titulo">Matrícula</p>
                  <p>215811651</p>
                </div>
                <div class="info">
                  <p class="titulo">Data de inscrição</p>
                  <p>02/05/2022</p>
                </div>
                <div class="info">
                  <p class="titulo">Status</p>
                  <p class="tag tag-verde">Concluído</p>
                </div>
                <button class="btn-lilas">EMITIR DECLARAÇÃO</button>
              </div>
            </div>
            <div class="matricula box-branco">
              <p class="titulo">Curso</p>
              <p>
                Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                Terapia
              </p>
              <div class="informacoes">
                <div class="info">
                  <p class="titulo">Matrícula</p>
                  <p>215811651</p>
                </div>
                <div class="info">
                  <p class="titulo">Data de inscrição</p>
                  <p>02/05/2022</p>
                </div>
                <div class="info">
                  <p class="titulo">Status</p>
                  <p class="tag tag-laranja">Cursando</p>
                </div>
                <button class="btn-lilas">EMITIR DECLARAÇÃO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-10">
        <div class="box-lilas">
          <h3 class="text-center">Cursos em Promoção</h3>
          <div class="cursos">
              <div class="curso" key={index}>
                <img
                  src="~/static/banner-curso.png"
                  alt="foto representando o curso"
                  class="foto-curso"
                />
                <div class="sobre">
                  <h6>
                    Avaliação Clínica de Enfermagem Aplicada ao Paciente na
                    Terapia
                  </h6>
                  <p class="carga-horaria">
                    <img
                      src="~/static/icons/icone-relogio-roxo.svg"
                      alt="icone relogio"
                    />
                    80 a 120 Horas
                  </p>
                  <b-link href="{`/aluno/cursos/${index}`}" class="btn-cinza">
                    ENTRAR NA SALA{" "}
                    <img
                      src="~/static/icons/icone-seta-direita-laranja.svg"
                      alt="icone seta para direita"
                    />
                  </b-link>
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
  name: 'AleatorioMinhaMatriculas',

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
