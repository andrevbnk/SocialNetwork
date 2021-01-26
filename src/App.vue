<template>
  <div id="app">
    <router-view />
    <Message />
    <Loader :isVisible="isLoading" />
  </div>
</template>

<script>
import Message from "./components/Message.vue";
import Loader from "./components/Loader.vue";
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => {
    return {
    };
  },
  computed: {
    ...mapGetters(['getLoading']),
     isLoading: function(){
       return this.getLoading;
     },
  },
  components: {
    Message,
    Loader,
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
  },
};
</script>

<style lang="scss">
@import "@/style/variables.scss";
@import "@/style/reset.scss";
.dark-style {
  padding: 0.85rem 1.5rem;
  background: $primary-color !important;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
.dark-less-style{
  padding: 0.85rem 1.5rem;
  background: $darkless !important;
  border: 1px solid rgba(30, 30, 30, 0.25);
}
html,
body {
  background-color: $bg-color !important;
  margin: 0;
  height: 100%;
}
#app {
  font-family: $font-stack;
  color: $font-color;
  text-align: center;
  height: 100%;
  label {
    margin-bottom: 0;
    margin-top: 10px;
  }
  a {
    
    cursor: pointer;
  }

}
</style>
