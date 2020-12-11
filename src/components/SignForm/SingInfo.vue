<template>
  <div class="sign-form-info">
    <div class="logo-info">
    
      <h1 class="logo">SocNet</h1>
      <div class="info"><h3>Общайтесь с друзьями и окружающим миром на SocNet.</h3></div>
      <router-link to="/secure">Secure</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scopedSlots>

@import '@/style/variables.scss';

.sign-form-info{
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
  height: 100vh;

  .logo{
    -webkit-text-stroke: 2.5px #000000;;
    font-size: 70px;
    text-align: left;
    color: $font-color;
    margin-bottom: 10px;
  
  }

}
</style>
