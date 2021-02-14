<template>
  <div class="sign-in-form">
    <form class="sign-in" @submit.prevent="submit">
      <h1>Войти в SocNet</h1>

      <div class="form-input">
        <div>
          <div class="form-group">
            <label class="form__label">Email</label>
            <input
              class="form-control form__input border-0 rounded"
              placeholder="Email"
              v-model.trim="$v.form.email.$model"
              :class="{ 'is-invalid': $v.form.email.$error }"
            />
            <div class="error invalid-feedback" v-if="!$v.form.email.email && form.email">
              Введите корректную почту
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Пароль</label>
            <input
              class="form-control form__input border-0 rounded"
              placeholder="Пароль..."
              type="password"
              v-model.trim="$v.form.password.$model"
              :class="{ 'is-invalid': $v.form.password.$error }"
            />
            <div
              class="error invalid-feedback"
              v-if="!$v.form.password.required && form.password"
            >
              Введите пароль.
            </div>
            <div
              class="error invalid-feedback"
              v-if="!$v.form.password.minLength && form.password"
            >
              Пароль должен быть длинее
              {{ $v.form.password.$params.minLength.min }} символов.
            </div>
          </div>
        </div>

        <button
          type="button"
          @click="submit"
          :disabled="$v.form.$invalid"
          class="btn btn-dark mt-1"
        >
          Войти
        </button>
        <router-link :to="{ name: 'SignUp' }">Зарегистрироваться?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["SignIn"]),
    async submit() {
      try {
        await this.SignIn(this.form);
      } catch (error) {
        console.log(error);
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>

<style lang="scss" scopedSlots>
@import "@/style/variables.scss";
@media (min-width: 1200px){
  .sign-in-form{
    width: 70%!important;
  }
}
.sign-in-form {
  background-color: $primary-color;
  border-radius: 10%;
  padding: 40px;
      margin: 0 auto;
  width: 100%;
}
.form-input {
  display: flex;
  flex-direction: column;
}
.form-group {
  display: flex;
  flex-direction: column;
}
</style>
