<template>
  <header id="header">
    <nav class="navbar navbar-expand-lg">
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" class="w-75 h-75" />
        </router-link>
        <!-- <router-link :to="{name: 'SignUp'}">SignUp</router-link>
          <router-link :to="{name: 'SignIn'}">SignIn</router-link> -->
      </div>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Магазин <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Про нас</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false" 
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#">Поддержка</a>
          </li>
        </ul>
          <div class="header__profile">
            <template v-if="isLoggedIn">
              <div class="header__ava">
                <router-link
                  class="header_ava__link"
                  :to="{ name: 'profile', params: { id: userId } }"
                  ><img class="header__ava__img" :src="stateUser.img" alt=""
                /></router-link>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-link border-0 dropdown-toggle m-25 username_setting"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ stateUser.username ? stateUser.username : stateUser.email }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <router-link class="dropdown-item" to="/edit">Настройки</router-link>
                  <a class="dropdown-item" href="#">Изменить язык</a>
                  <a class="dropdown-item" @click="logout">Выйти</a>
                </div>
              </div>
            </template>
            <template v-else class="nav-item">
              <router-link :to="{ name: 'SignUp' }">Войти</router-link>
            </template>
          </div>

        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
      </div>
    </nav>
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
      return stateUser;
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
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.header__ava__img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid whitesmoke;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(79,79,79, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: rgb(138, 138, 138);
}

.dropdown-menu.show {
  background: $primary-color;
}
.dropdown-item {
  color: #909090 !important;
}
.btn:focus,
.btn.focus {
  box-shadow: 0 0 0 0 !important;
}
.dropdown-item:hover,
.dropdown-item:focus {
  background: $second-color !important;
  color: $font-color !important;
}
.header {
  color: $font-color;
}
.username_setting {
  color: $second-color !important;
}
.navbar-toggler-icon {
  border-color: rgb(255, 102, 203);
}
.header__pos {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 1fr;
}
.navbar {
  a {
    color: $font-color !important;
  }
}
.header__profile{
  margin-right: 6rem!important;
}
</style>
