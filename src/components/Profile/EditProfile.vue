<template>
  <div v-if="!show">
    <!-- Сообщение -->
  </div>
  <div class="container flex-grow-1 container-p-y" v-else>
    <h4 class="font-weight-bold py-3 mb-4">Настройки аккаунта</h4>

    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-dark">
        <div class="col-md-3 pt-0">
          <div class="list-group list-group-flush account-settings-links">
            <a
              class="list-group-item list-group-item-action active"
              data-toggle="list"
              href="#account-general"
              >Общие</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account-info"
              >Информация</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account-change-password"
              >Сменить пароль</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account-social-links"
              >Социальные связи</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account-connections"
              >Подключения сервисов</a
            >
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              href="#account-notifications"
              >Уведомления</a
            >
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">
              <div class="card-body media align-items-center">
                <img
                  :src="this.$store.getters.StateUser.img"
                  alt=""
                  class="d-block ui-w-80"
                />
                <div class="media-body ml-4">
                  <label class="btn btn-outline-secondary">
                    Загрузите новую фотографию
                    <input type="file" class="account-settings-fileinput" />
                  </label>
                  &nbsp;
                  <button type="button" class="btn btn-outline-secondary md-btn-flat">
                    Сбросить
                  </button>

                  <div class="text-dark small mt-1">
                    Разрешается JPG, GIF или PNG. Максимально до 2MB
                  </div>
                </div>
              </div>
              <hr class="border-dark m-0" />

              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  v-model="user.username"
                  id="username"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': $v.user.username.$invalid }"
                />
                <div v-if="!$v.user.username.required" class="error invalid-feedback">
                  Имя должно быть заполнено
                </div>
                <div class="error invalid-feedback" v-if="!$v.user.username.minLength">
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
                    :class="{ 'is-invalid': $v.user.firstName.$invalid }"
                    placeholder="Иван"
                  />
                  <input
                    type="text"
                    v-model="user.lastName"
                    id="lastName"
                    name="lastName"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.lastName.$invalid }"
                    placeholder="Иванов"
                  />
                </div>

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
                <div class="alert alert-second border border-dark mt-3">
                  Подтвердите email,проверьте письмо на почте<br />
                  <a href="javascript:void(0)" class="badge badge-dark"
                    >Повторить попытку</a
                  >
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="account-change-password">
              <div class="card-body pb-2">
                <div class="form-group">
                  <label class="form-label">Текущий пароль</label>
                  <input type="password" class="form-control" />
                </div>

                <div class="form-group">
                  <label class="form-label">Новый пароль</label>
                  <input type="password" class="form-control" />
                </div>

                <div class="form-group">
                  <label class="form-label">Повторить пароль</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="account-info">
              <div class="card-body pb-2">
                <div class="form-group">
                  <label for="about">Про себя</label>
                  <textarea
                    v-model="user.about"
                    placeholder="Про себя..."
                    :class="{ 'is-invalid': $v.user.about.$invalid }"
                    name="about"
                    class="form-control profile__textarea"
                  >
                  </textarea>

                  <div class="error" v-if="!$v.user.about.maxLength">
                    Описание не должено превышать
                    {{ $v.user.about.$params.maxLength.max }} символа.
                  </div>
                </div>
                <div class="form-group">
                  <label for="example-date-input" class="form-label">Дата рождения</label>
                  <input
                    class="form-control"
                    type="date"
                    id="date"
                    v-model="user.birthday"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Страна</label>
                  <select class="custom-select" v-model="user.location">
                    <option>Россия</option>
                    <option selected="">Украина</option>
                    <option>Германия</option>
                    <option>Франция</option>
                  </select>
                </div>
              </div>
              <hr class="border-dark m-0" />
              <div class="card-body pb-2">
                <h6 class="mb-4">Контакты</h6>
                <div class="form-group">
                  <label class="form-label">Телефон</label>
                  <input type="text" class="form-control" v-model="user.phone" />
                </div>
                <div class="form-group">
                  <label class="form-label">Веб-сайт</label>
                  <input type="text" class="form-control" v-model="user.webSite" />
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="account-social-links">
              <div class="card-body pb-2">
                <div class="form-group" v-for="soc in user.socLinks" :key="soc.name">
                  <label class="form-label" :for="soc.name">{{ soc.name }}</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">{{ soc.defaultUrl }}</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      :id="soc.name"
                      v-model="soc.url"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="account-connections">
              <div class="card-body">
                <button type="button" class="btn btn-twitter">
                  Подключение к <strong>Twitter</strong>
                </button>
              </div>
              <hr class="border-dark m-0" />
              <div class="card-body">
                <h5 class="mb-2">
                  <a href="javascript:void(0)" class="float-right text-muted text-tiny"
                    ><i class="ion ion-md-close"></i> Отвязать</a
                  >
                  <i class="ion ion-logo-google text-google"></i>
                  Вы подключены к Google:
                </h5>
                В будущем сделаю(нет)
              </div>
              <hr class="border-dark m-0" />
              <div class="card-body">
                <button type="button" class="btn btn-facebook">
                  Подключение к <strong>Facebook</strong>
                </button>
              </div>
              <hr class="border-dark m-0" />
              <div class="card-body">
                <button type="button" class="btn btn-instagram">
                  Подключение к <strong>Instagram</strong>
                </button>
              </div>
            </div>
            <div class="tab-pane fade" id="account-notifications">
              <div class="card-body pb-2">
                <h6 class="mb-4">Письма(не работает)</h6>

                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" checked="" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label"
                      >Присылать письмо если кто-то прокомментировал поста</span
                    >
                  </label>
                </div>
                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" checked="" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label"
                      >Присылать письмо если вас добавили/удалили из группы</span
                    >
                  </label>
                </div>
                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label"
                      >Присылать письмо когда вас добавили/подписались
                    </span>
                  </label>
                </div>
              </div>
              <hr class="border-dark m-0" />
              <div class="card-body pb-2">
                <h6 class="mb-4">Уведомления</h6>

                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" checked="" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label">Новые сообщения</span>
                  </label>
                </div>
                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label">Новые новости</span>
                  </label>
                </div>
                <div class="form-group">
                  <label class="switcher">
                    <input type="checkbox" class="switcher-input" checked="" />
                    <span class="switcher-indicator">
                      <span class="switcher-yes"></span>
                      <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label">Когда вас упомянули</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-right mt-3">
      <button
        type="button"
        class="btn btn-dark"
        @click="submit"
        :disabled="$v.user.$invalid"
      >
        Сохранить</button
      >&nbsp;
      <!-- <button type="button" class="btn btn-default">Отменить</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import {mapMutations } from 'vuex';

export default {
  data: () => {
    return {
      user: {
        firstName: "",
        username: false,
        lastName: "",
        age: "",
        about: "",
        location: "",
        birthday: "",
        sex: "",
        socLinks: {},
      },
      email: "",
      show: false,
    };
  },
  created() {
    axios
      .post("/profile/edit", { id: this.$store.getters.userId })
      .then((res) => {
        if (res.data.status) {
          this.show = true;

          this.user = res.data.user.data;
          this.email = res.data.user.email;

          let dataFormat = new Date(this.user.birthday).toISOString().substr(0, 10);
          this.user.birthday = dataFormat;
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
      firstName: { minLength: minLength(4) },
      lastName: { minLength: minLength(4) },
      username: { required, minLength: minLength(3) },
      about: { maxLength: maxLength(200) },
    },
  },
  methods: {
    ...mapMutations(["showLoader"]),
    async submit() {
      this.showLoader();
      const res = await axios.post("/profile/editSave", {
        id: this.$store.getters.userId,
        user: this.user,
      });
      console.log(res);
      if (res.data.status) {
        this.$store.dispatch("SetName", res.data.username);
        this.$router.go();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
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
.input-group-text {
  border-radius: 0.25rem 0rem 0rem 0.25rem !important;
}

.ui-w-80 {
  width: 80px !important;
  height: auto;
}

.btn-default {
  border-color: rgba(24, 28, 33, 0.1);
  background: rgba(0, 0, 0, 0);
  color: $primary-color !important;
}

label.btn {
  margin-bottom: 0;
}

.btn {
  cursor: pointer;
}

.text-dark {
  color: $font-color !important;
}

.btn-facebook {
  border-color: rgba(0, 0, 0, 0);
  background: #3b5998;
  color: #fff;
}

.btn-instagram {
  border-color: rgba(0, 0, 0, 0);
  background: #000;
  color: #fff;
}

.card {
  background-clip: padding-box;
  box-shadow: 0 1px 4px rgba(24, 28, 33, 0.012);
  background-color: $primary-color !important;
}

.row-bordered {
  overflow: hidden;
}

.account-settings-fileinput {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.account-settings-links .list-group-item.active {
  font-weight: bold !important;
}
html:not(.dark-style) .account-settings-links .list-group-item.active {
  background: transparent !important;
}
.account-settings-multiselect ~ .select2-container {
  width: 100% !important;
}
.dark-style .account-settings-links .list-group-item {
  background: $primary-color !important;
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}

.dark-style .account-settings-links .list-group-item.active {
  color: $font-color !important;
}
.material-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
.material-style .account-settings-links .list-group-item.active {
  color: $font-color !important;
}
.dark-style .account-settings-links .list-group-item.active {
  color: #fff !important;
}
.dark-style .account-settings-links .list-group-item.active {
  color: $font-color !important;
}
.dark-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
</style>
