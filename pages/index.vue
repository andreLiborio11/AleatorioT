<template>
  <div>
  <Header />
  <Banner />
  <Catalogo />
  <Certificado />
  <Depoimentos />
  <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components:{
    Header:() => import('~/components/Header.vue'),
    Banner:() => import('~/components/Banner.vue'),
    Catalogo:() => import('~/components/Categorias.vue'),
    Certificado:() => import('~/components/Certificados.vue'),
    Depoimentos:() => import('~/components/Depoimentos.vue'),
    Footer:() => import('~/components/Footer.vue'),
  }
}
</script>
