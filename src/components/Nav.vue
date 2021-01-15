<template>
  <nav id="nav" class="nav flex-column dark-style">
    <!-- nav 
          <router-link class="header_ava__link" :to="{ name: 'profile', params: { id: '12323' } }">asd</router-link> -->
    <div class="nav-item text-center">
      zxc
    </div>
    <div class="nav-item text-center">
      asd
    </div>
    <div class="nav-item text-center">
      oooo
    </div>
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
