<template>
    <header id="header">
        hedear
      <router-link :to="{name: 'SignUp'}">SignUp</router-link>
      <router-link :to="{name: 'SignIn'}">SignIn</router-link>
    <div class="d-flex justify-content-end">
      <template v-if="isLoggedIn">
        <div class="header__ava">
          <router-link class="header_ava__link" :to="{ name: 'profile', params: { id: userId } }"><img class="header__ava__img" :src="stateUser.img" alt=""></router-link>
        </div>
        <div class="dropdown">
          <button class="btn btn-outline-dark border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{stateUser.username ? stateUser.username : stateUser.email}}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="logout">Выйти</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </template>
      <template v-else class="nav-item">
        <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
        <router-link :to="{ name: 'SignIn' }">SignIn</router-link>
      </template>
    </div>
    </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    stateUser: function () {
      let stateUser = this.$store.getters.StateUser;
      return  stateUser;
    },
    userId: function () {
      return this.$store.getters.userId;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push({ name: "SignIn" });
    },
  },
}
</script>

<style lang="scss">
.header__ava__img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid whitesmoke;
  }

</style>