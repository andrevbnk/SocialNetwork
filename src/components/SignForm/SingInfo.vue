<template>
  <div class="sign-form-info">
    <div class="logo-info">
    
      <h1 class="logo">SocNet</h1>
      <div class="info"><h3>Общайтесь с друзьями и окружающим миром на SocNet.</h3></div>
      <router-link to="/secure"> Secure</router-link>
      <router-link :to="{name: 'SignUp'}"> SignUp</router-link>
      <router-link :to="{name: 'SignIn'}"> SignIn</router-link>
      <router-link :to="{name: 'Home'}"> Home</router-link>
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


  .logo{
    -webkit-text-stroke: 0.9px #ffffff;
    font-size: 70px;
    text-align: left;
    color: #000;
    font-weight: 600;
    margin-bottom: 10px;
  
  }

}
</style>
