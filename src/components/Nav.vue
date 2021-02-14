<template>
  <nav id="nav" class="nav flex-column dark-style">    
    <ul class="nav list-group border border-dark border-top-0 border-bottom-0">
      <li class="list-group-item list-group-item-action dark dark-less"><router-link to="/secure" class="link-nav"> Secure</router-link></li>
      <li class="list-group-item list-group-item-action darl dark-less"> <router-link :to="{name: 'AllUsers'}" class="link-nav"> Home</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    username: function () {
      let stateUser = this.$store.getters.StateUser;
      console.log(stateUser);
      return stateUser.data.username ? stateUser.data.username : stateUser.email;
    },
    userId: function () {
      return this.$store.getters.StateUser.id;
    },
  },

};
</script>

<style scopedSlots>
.link-nav{
  color:#afafaf;
}
.link-nav:hover{
  color: #ffffff;
  text-decoration-line: none;
}
</style>
