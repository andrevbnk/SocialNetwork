<template>
  <nav id="nav" class="nav flex-column">
    nav 
          <router-link class="header_ava__link" :to="{ name: 'profile', params: { id: '12323' } }">asd</router-link>

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

<style></style>
