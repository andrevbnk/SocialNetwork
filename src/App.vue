<template>
  <div id="app">
    <router-view />
    <Message />
  </div>
</template>

<script>
import Message from "./components/Message.vue";

export default {
  components: {
    Message,
  },
};
</script>

<style lang="scss">
@import "@/style/variables.scss";
@import "@/style/reset.scss";
.dark-style{
    padding: 0.85rem 1.5rem;
  background: $primary-color !important;
  border:1px solid rgba(0, 0, 0,0.25);
  
}

#app {
  background-color: $bg-color;
  font-family: $font-stack;
  color: $font-color;
  display: inline-block;
  position: absolute;
  height:100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  label {
    margin-bottom: 0;
    margin-top: 10px;
  }
  a {
    cursor: pointer;
  }
}
</style>
