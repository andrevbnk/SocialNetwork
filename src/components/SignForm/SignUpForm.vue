<template>
  <div class="sign-up-form">
    <div class="sign-up">
      <h1>Регистрация в SocNet</h1>

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
              v-model.trim="$v.form.password.$model"
              type="password"
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

          <div class="form-group">
            <label class="form__label">Повторный пароль</label>
            <input
              class="form-control form__input border-0 rounded"
              placeholder="Повторный пароль..."
              type="password"
              v-model.trim="$v.form.repeatPassword.$model"
              :class="{ 'is-invalid': $v.form.repeatPassword.$error }"
            />

            <div
              class="error invalid-feedback"
              v-if="!$v.form.repeatPassword.sameAsPassword && form.repeatPassword"
            >
              Пароли должны совпадать
            </div>
          </div>
        </div>

        <button
          type="button"
          @click="submit"
          :disabled="$v.form.$invalid"
          class="btn btn-dark mt-1"
        >
          Зарегистрироваться
        </button>
        <router-link :to="{ name: 'SignIn' }">Уже в системе?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "SignUp",
  components: {},

  data: () => {
    return {
      form: {
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["SignUp"]),
    async submit() {
      try {
        await this.SignUp(this.form);
      } catch (error) {
        console.log("SignUp Error", error);
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
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
};
</script>

<style lang="scss" scoped scopedSlots>
@import "@/style/variables.scss";
@media (min-width: 1200px){
  .sign-up-form{
    width: 70%!important;
  }
}

.sign-in {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sign-up-form {
  background-color: $primary-color;
  border-radius: 10%;
  padding: 40px;
  margin:0 auto;
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
