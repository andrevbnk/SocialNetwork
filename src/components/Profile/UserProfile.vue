<template>
  <div class="profile">
    <template v-if="!status">
      {{ message }}
      <!-- сделать нормально добавить Loader -->
    </template>
    <template v-else>
      <div class="profile__user">
        <div class="profile__ava">
          <div class="profile__ava__center">
            <img :src="user.data.img" class="profile__logo__img" alt="" srcset="" />
            <span>{{ user.username }}</span>
             <router-link :to="{name: 'edit'}">Редактировать профиль</router-link>
          </div>
        </div>

        <div class="profile__info">
          <div class="profile__info__fullName">
            <h1> {{ user.data.username }}</h1>
          </div>
          <div class="profile__info__grid">
            <div class="profile__info__headers">
            <span>Имя:</span>
            <span>Фамилия:</span>
            <span>Город:</span>
            <span>Про себя:</span>
            </div>

            <div class="profile__info__value">
              <span>{{ user.data.firstName }}</span>
              <span>{{ user.data.lastName }}</span>
              <span>{{ user.data.location }}</span>
              <span>{{ user.data.about }}</span>
              
            </div>
          </div>

        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      user: {},
      status: false,
      message: false,
    };
  },
  created() {
    this.axiosData();
  },
  methods: {
    axiosData() {
      axios
        .get("/profile/" + this.$route.params.id)
        .then((res) => {
          this.user = res.data.user;
          this.status = res.data.status;
          this.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    $route: "axiosData",
  },
};
</script>

<style lang="scss">
.profile__ava__center {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.profile__user {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
}
.profile__ava {
  display: flex;
  flex-direction: column;
}
.profile__info__grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.profile__info {
}
.profile__info__value{
  display: grid;
    text-align: start;
}
.profile__info__headers{
    text-align: start;
    display: grid;
    padding-left: 60%;
}
.profile__logo__img {
  width: 150px;
  height: 150px;
  border: 1px solid black;
}
</style>
