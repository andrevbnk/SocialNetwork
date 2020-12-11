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
.home{
  display: grid;
  grid-template-areas:
  "header header header"
  "nav article article"
  "footer footer footer";
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 0.5fr;
  grid-gap: 0.5vw;
  height: 100vh;
  margin: 0;

  #nav{
    grid-area: nav;
    padding: 20px;
    background-color: gold;
  }
  #footer{
    grid-area: footer;
    padding: 20px;
    background-color: gold;
  }
  #header{
    grid-area: header;
    padding: 20px;
    background-color: gold;
  }
  #article{
    grid-area: article;
    padding: 20px;
    background-color: gold;
  }
}
</style>
