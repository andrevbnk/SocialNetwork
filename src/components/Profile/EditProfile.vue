<template>
  <div v-if="!show">
    <span>Что-то сломалось,перезайдите</span>
  </div>
  <div class="edit__profile" v-else>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Общие</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Аватарка</a>
      </li>

      <li class="nav-item">
        <a class="nav-link disabled" href="#">Настройки приватности</a>
      </li>
    </ul>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Редактирование профиля</h2>
            <form @submit.prevent="sumbit">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  name="email"
                  class="form-control"
                  readonly
                />
              </div>

              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  v-model="user.username"
                  id="username"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': $v.user.username.$error }"
                />
                <div v-if="!$v.user.username.required" class="invalid-feedback">
                  Имя должно быть заполнено
                </div>
                <div class="error" v-if="!$v.user.username.minLength">
                  Username должен быть больше чем
                  {{ $v.user.username.$params.minLength.min }} символа.
                </div>
              </div>


              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-text">Имя и фамилия</span>
                  <input
                    type="text"
                    v-model="user.firstName"
                    id="firstName"
                    name="firstName"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.firstName.$error }"
                    placeholder="Иван"
                  />
                  <input
                    type="text"
                    v-model="user.lastName"
                    id="lastName"
                    name="lastName"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.lastName.$error }"
                    placeholder="Иванов"
                  />

                  <div v-if="!$v.user.lastName.required" class="invalid-feedback">
                    Фамилия должно быть заполнено
                  </div>
                  <div class="error" v-if="!$v.user.lastName.minLength">
                    Фамилия должно быть больше чем
                    {{ $v.user.lastName.$params.minLength.min }} символа.
                  </div>

                  <div v-if="!$v.user.firstName.required" class="invalid-feedback">
                    Имя должно быть заполнено
                  </div>
                  <div class="error" v-if="!$v.user.firstName.minLength">
                    Имя должно быть больше чем
                    {{ $v.user.firstName.$params.minLength.min }} символа.
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="about">Про себя</label>
                <textarea
                  v-model="user.about"
                  placeholder="Про себя..."
                  name="about"
                  class="form-control profile__textarea"
                >
                </textarea>
              </div>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">Пол</legend>
                  <div class="col-sm-10 d-flex">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="Мужчина"
                        v-model="user.sex"
                      />
                      <label class="form-check-label edit__radio" for="gridRadios1">
                        Мужчина
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="Женщина"
                        v-model="user.sex"
                      />
                      <label class="form-check-label edit__radio" for="gridRadios2">
                        Женщина
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div class="form-group">
                <label class="form__label">Возраст</label>
                <input
                  class="form__input"
                  v-model.trim.lazy="$v.user.age.$model"
                  :class="{ 'is-invalid': $v.user.age.$error }"
                  placeholder="Ваш возраст"
                />

                <div class="invalid-feedback" v-if="!$v.user.age.between">
                  Должен быть между {{ $v.user.age.$params.between.min }} и
                  {{ $v.user.age.$params.between.max }}
                </div>
              </div>

              <div class="form-group">
                <button class="btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  // export default { :value="user.lastName"

  data: () => {
    return {
      user: {
        firstName: "",
        username: "",
        lastName: "",
        age: "",
        about: "",
        sex: "",
      },
      email: "",
      show: false,
    };
  },
  created() {
    axios
      .post("/edit", { id: this.$store.getters.userId })
      .then((res) => {
        if (res.data.status) {
          this.show = true;

          this.user = res.data.user.data;
          this.email = res.data.user.email;
          console.log(this.user);
        } else {
          return this.$store.dispatch("ShowMessage", res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  validations: {
    user: {
      firstName: { required, minLength: minLength(4) },
      lastName: { required, minLength: minLength(4) },
      age: { between: between(1, 115) },
      username: { required, minLength: minLength(3) },
    },
  },
  methods: {
    async sumbit() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const res = await axios.post("/editSave", {
        id: this.$store.getters.userId,
        user: this.user,
      });
      console.log(res);
      if (res.data.status) {
        //  this.$router.push("/edit");
      }
    },
  },
};
</script>

<style lang="scss" scopedSlots>
.edit__radio {
  margin-right: 10px;
}
.edit__profile {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}
.nav-item {
  text-align: start;
  margin-left: 15px;
}
.profile__textarea {
  resize: none;
}
label {
  margin-top: 0px !important;
}
.input-group-text{
  border-radius: 0.25rem 0rem 0rem 0.25rem!important;
}
</style>
