<template>
  <div class="fixed-bottom global__message">
    <template v-if="Show">
      <div class="alert alert-danger">
        {{this.$store.state.message}}

      </div>
    </template>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.state.message = null;
    },
    methods: {
      messageClear(){
        setTimeout(()=>this.$store.state.message = null,3000);
      }
    },
    computed: {
      Show:function(){
        if(this.$store.state.message){
          console.log(this.$store.state.message);
          this.messageClear();
          return true;
        }
        return false;
      }
    },
  }
</script>
<style lang="scss" scopedSlots>
  .global__message{
    width: 100%;
  }
  .alert{
    margin:0px!important;
  }
</style>