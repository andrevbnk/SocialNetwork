<template>
  <div id="app">
    <router-view/>
    
    <Message/>
  </div>
</template>

<script>
import Message from "./components/Message.vue";


export default {
  components:{
    Message,
  }
}
</script>

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/reset.scss';

#app {
  background-color: $primary-color;
  font-family: $font-stack;
  color:$font-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  label{
    margin-bottom: 0;
    margin-top:10px;
  }
}

</style>
