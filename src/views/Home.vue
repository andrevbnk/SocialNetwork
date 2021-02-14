<template>
  <div class="home">
    <Header />
    <Nav />
    <Article />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Article from '@/components/Article.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Article,
    Nav,
    Footer,
  }
}
</script>


<style lang="scss" scope>
@import '@/style/variables.scss';
.home{
  display: grid;
  grid-template-areas:
  "header header header"
  "nav article article"
  "footer footer footer";
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows:0.35fr 1.5fr 0.2fr;
  margin: 0;
  position: absolute;
    height: 100%;
    width: 100%;

  #nav{
    grid-area: nav;
    padding: 20px;
    padding-top: 50px;
    background-color: $primary-color;
  }
  #footer{
    grid-area: footer;
    padding: 20px;
    background-color: $primary-color;
  }
  #header{
    grid-area: header;
    background-color: $primary-color;
  }
  #article{
    grid-area: article;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: $primary-color;
  }
}
  @media (max-width: 568px) {
    .home{
    display:grid;
    grid-template-areas:
    "header header header"
    "article article article"
    "footer footer footer";
    grid-template-columns: 1fr 1fr 1fr;
    #nav{
      display: none;
    }
    }
  }
</style>
