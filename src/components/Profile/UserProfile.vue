<template>
  <div class="profile">
    <template v-if="!status">
      <!-- Сообщение какое-то, я ещё не придумал -->
    </template>
    <template v-else>
      <div class="container bootstrap snippets bootdeys">
        <div class="row" id="user-profile">
          <div class="col-lg-3 col-md-4 col-sm-4">
            <div class="main-box clearfix">
              <h2 class="username">{{ user.data.username }}</h2>
              <div class="profile-status"><i class="fa fa-check-circle"></i> Online</div>
              <img
                :src="user.data.img"
                alt=""
                class="profile-img img-responsive img-thumbnail center-block"
              />
              <div class="profile-label">
                <span class="label label-danger">Admin</span>
              </div>

              <!--<div class="profile-stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
                <span>Super User</span>
              </div> -->

              <div class="profile-since">
                Дата создания: {{ this.user.data.dataCreated | dateFormate }}
              </div>

              <div class="profile-details">
                <ul class="fa-ul">
                  <li>
                    <i class="fa-li fa fa-address-book"></i>Друзей: <span>456</span>
                  </li>
                  <li><i class="fa-li fa fa-user-o"></i>Подписчиков: <span>828</span></li>
                  <li>
                    <i class="fa-li fa fa-object-group"></i>Групп: <span>1024</span>
                  </li>
                </ul>
              </div>

              <div class="profile-message-btn center-block text-center">
                <a href="#" class="btn btn-success">
                  <i class="fa fa-envelope"></i> Написать сообщение
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-9 col-md-8 col-sm-8">
            <div class="main-box clearfix">
              <div class="profile-header">
                <h3><span>Информация</span></h3>
                <router-link
                  to="/edit"
                  class="btn btn-primary edit-profile"
                  v-if="this.$store.getters.userId == $route.params.id"
                >
                  <i class="fa fa-pencil-square fa-lg"></i> Редактировать профиль
                </router-link>
              </div>

              <div class="row profile-user-info">
                <div class="col-sm-8">
                  <div
                    class="profile-user-details clearfix"
                    v-for="(info, key) in ruData"
                    :key="key"
                  >
                    <div class="profile-user-details-label">{{ info }}</div>
                    <div class="profile-user-details-value">
                      {{ user.data[key] | dateFormate(key) }}
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 profile-social">
                  <ul class="fa-ul" v-for="obj in user.data.socLinks" :key="obj.name">
                    <li>
                      <i
                        class="fa-li fa"
                        :class="obj.url ? socLinksStyle[obj.name] : ''"
                      ></i
                      ><a :href="obj.defaultUrl + obj.url">{{ obj.url }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tabs-wrapper profile-tabs">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a href="#tab-activity" data-toggle="tab">Активность</a>
                  </li>
                  <li><a href="#tab-friends" data-toggle="tab">Друзья</a></li>
                  <li><a href="#tab-chat" data-toggle="tab">Чат</a></li>
                </ul>

                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab-activity">
                    <div class="table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-comment"></i>
                            </td>
                            <td>
                              John Doe posted a comment in
                              <a href="#">Avengers Initiative</a> project.
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-truck"></i>
                            </td>
                            <td>
                              John Doe changed order status from
                              <span class="label label-primary">Pending</span> to
                              <span class="label label-success">Completed</span>
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-check"></i>
                            </td>
                            <td>
                              John Doe posted a comment in
                              <a href="#">Lost in Translation opening scene</a>
                              discussion.
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-users"></i>
                            </td>
                            <td>
                              John Doe posted a comment in
                              <a href="#">Avengers Initiative</a> project.
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-heart"></i>
                            </td>
                            <td>
                              John Doe changed order status from
                              <span class="label label-warning">On Hold</span> to
                              <span class="label label-danger">Disabled</span>
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-check"></i>
                            </td>
                            <td>
                              John Doe posted a comment in
                              <a href="#">Lost in Translation opening scene</a>
                              discussion.
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-truck"></i>
                            </td>
                            <td>
                              John Doe changed order status from
                              <span class="label label-primary">Pending</span> to
                              <span class="label label-success">Completed</span>
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <i class="fa fa-users"></i>
                            </td>
                            <td>
                              John Doe posted a comment in
                              <a href="#">Avengers Initiative</a> project.
                            </td>
                            <td>2014/08/08 12:08</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="tab-friends">
                    <ul class="widget-users row">
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">John Doe </a>
                          </div>
                          <div class="time">
                            <i class="fa fa-clock-o"></i> Last online: 5 minutes ago
                          </div>
                          <div class="type">
                            <span class="label label-danger">Admin</span>
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Mila Kunis</a>
                          </div>
                          <div class="time online">
                            <i class="fa fa-check-circle"></i> Online
                          </div>
                          <div class="type">
                            <span class="label label-warning">Pending</span>
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Ryan Gossling</a>
                          </div>
                          <div class="time online">
                            <i class="fa fa-check-circle"></i> Online
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Robert Downey Jr.</a>
                          </div>
                          <div class="time">
                            <i class="fa fa-clock-o"></i> Last online: Thursday
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Emma Watson</a>
                          </div>
                          <div class="time">
                            <i class="fa fa-clock-o"></i> Last online: 1 week ago
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">George Clooney</a>
                          </div>
                          <div class="time">
                            <i class="fa fa-clock-o"></i> Last online: 1 month ago
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Mila Kunis</a>
                          </div>
                          <div class="time online">
                            <i class="fa fa-check-circle"></i> Online
                          </div>
                          <div class="type">
                            <span class="label label-warning">Pending</span>
                          </div>
                        </div>
                      </li>
                      <li class="col-md-6">
                        <div class="img">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="details">
                          <div class="name">
                            <a href="#">Ryan Gossling</a>
                          </div>
                          <div class="time online">
                            <i class="fa fa-check-circle"></i> Online
                          </div>
                        </div>
                      </li>
                    </ul>
                    <br />
                    <a href="#" class="btn btn-success pull-right">View all users</a>
                  </div>

                  <ChatProfile :idProfile="user._id" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import ChatProfile from "./ChatProfile";
import { mapMutations } from "vuex";

export default {
  data: () => {
    return {
      user: {},
      status: false,
      message: false,
      ru: {
        firstName: "Имя",
        lastName: "Фамилия",
        location: "Адрес",
        phone: "Телефон",
        about: "Про себя",
        webSite: "Веб-сайт",
        birthday: "День Рождения",
      },
      socLinksStyle: {
        Facebook: "fa-facebook-square",
        Instagram: "fa-instagram",
        LinkedIn: "fa-linkedin-square",
        "Google+": "fa-google",
      },
    };
  },
  components: {
    ChatProfile,
  },
  created() {
    this.axiosData();
  },
  methods: {
    ...mapMutations(["showLoader"]),
    axiosData() {
      this.showLoader();
      axios
        .get("/profile/" + this.$route.params.id)
        .then((res) => {
          this.user = res.data.user;
          this.status = res.data.status;
          this.message = res.data.message;
          console.log(this.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ruData: function () {
      let data = {};
      for (let i in this.ru) {
        if (this.user.data[i]) {
          data[i] = this.ru[i];
        }
      }
      return data;
    },
  },
  watch: {
    $route: "axiosData",
  },
};
</script>

<style lang="scss" scopedSlots>
@import "@/style/variables.scss";
.profile__ava__center {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.username {
  word-wrap: break-word;
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
.profile__info__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.profile__info {
}
.profile__info__value {
  display: grid;
  text-align: start;
}
.profile__info__headers {
  text-align: start;
  display: grid;
  padding-left: 60%;
}
.profile__logo__img {
  width: 150px;
  height: 150px;
  border: 1px solid black;
}

h2 {
  clear: both;
  font-size: 1.8em;
  margin-bottom: 10px;
  padding: 10px 0 10px 30px;
}

h3 > span {
  border-bottom: 2px solid #c2c2c2;
  display: inline-block;
  padding: 0 5px 5px;
}

/* USER PROFILE */
#user-profile h2 {
  padding-right: 15px;
}
#user-profile .profile-status {
  font-size: 0.75em;
  padding-left: 12px;
  margin-top: -10px;
  padding-bottom: 10px;
  color: #8dc859;
}
#user-profile .profile-status.offline {
  color: #fe635f;
}
#user-profile .profile-img {
  border: 1px solid #e1e1e1;
  padding: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}
#user-profile .profile-label {
  text-align: center;
  padding: 5px 0;
}
.img-thumbnail {
  background: none !important;
}
#user-profile .profile-label .label {
  padding: 5px 15px;
  font-size: 1em;
}
#user-profile .profile-stars {
  color: #faba03;
  padding: 7px 0;
  text-align: center;
}
#user-profile .profile-stars > i {
  margin-left: -2px;
}
#user-profile .profile-since {
  text-align: center;
  margin-top: -5px;
  font-size: 12px;
}
#user-profile .profile-details {
  padding: 15px 0;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  margin: 15px 0;
}
#user-profile .profile-details ul {
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 40px;
}
#user-profile .profile-details ul > li {
  margin: 3px 0;
  line-height: 1.5;
}
#user-profile .profile-details ul > li > i {
  padding-top: 2px;
}
#user-profile .profile-details ul > li > span {
  color: #34d1be;
}
#user-profile .profile-header {
  position: relative;
}
#user-profile .profile-header > h3 {
  margin-top: 10px;
}
#user-profile .profile-header .edit-profile {
  margin-top: -6px;
  position: absolute;
  right: 0;
  top: 0;
}
#user-profile .profile-tabs {
  margin-top: 30px;
}
#user-profile .profile-user-info {
  padding-bottom: 20px;
}
#user-profile .profile-user-info .profile-user-details {
  position: relative;
  padding: 4px 0;
}
#user-profile .profile-user-info .profile-user-details .profile-user-details-label {
  width: 110px;
  float: left;
  bottom: 0;
  font-weight: bold;
  font-size: 14px;
  left: 0;
  position: absolute;
  text-align: right;
  top: 0;
  width: 110px;
  padding-top: 4px;
}
#user-profile .profile-user-info .profile-user-details .profile-user-details-value {
  margin-left: 120px;
}
#user-profile .profile-social li {
  padding: 4px 0;
}
#user-profile .profile-social li > i {
  padding-top: 6px;
}
@media only screen and (max-width: 767px) {
  #user-profile .profile-user-info .profile-user-details .profile-user-details-label {
    float: none;
    position: relative;
    text-align: left;
  }
  #user-profile .profile-user-info .profile-user-details .profile-user-details-value {
    margin-left: 0;
  }
  #user-profile .profile-social {
    margin-top: 20px;
  }
}
@media only screen and (max-width: 420px) {
  #user-profile .profile-header .edit-profile {
    display: block;
    position: relative;
    margin-bottom: 15px;
  }
  #user-profile .profile-message-btn .btn {
    display: block;
  }
}

.main-box {
  // background: #ffffff;

  -webkit-box-shadow: 1px 1px 2px 1px #080808;
  -moz-box-shadow: 1px 1px 2px 1px #080808;
  -o-box-shadow: 1px 1px 2px 1px #080808;
  -ms-box-shadow: 1px 1px 2px 1px #080808;
  box-shadow: 1px 1px 2px 1px #080808;
  margin-bottom: 16px;
  padding: 20px;
}
.main-box h2 {
  margin: 0 0 15px -20px;
  padding: 5px 0 5px 20px;
  border-left: 10px solid #c2c2c2; /*7e8c8d*/
}

.btn {
  border: none;
  padding: 6px 12px;
  border-bottom: 4px solid;
  -webkit-transition: border-color 0.1s ease-in-out 0s,
    background-color 0.1s ease-in-out 0s;
  transition: border-color 0.1s ease-in-out 0s, background-color 0.1s ease-in-out 0s;
  outline: none;
}
.btn-default,
.wizard-cancel,
.wizard-back {
  background-color: #7e8c8d;
  border-color: #626f70;
  color: #fff;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default,
.wizard-cancel:hover,
.wizard-cancel:focus,
.wizard-cancel:active,
.wizard-cancel.active,
.wizard-back:hover,
.wizard-back:focus,
.wizard-back:active,
.wizard-back.active {
  background-color: #949e9f;
  border-color: #748182;
  color: #fff;
}
.btn-default .caret {
  border-top-color: #ffffff;
}
.btn-info {
  background-color: #5daee7;
  border-color: #4c95c9;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  background-color: #4c95c9;
  border-color: #3f80af;
}
.btn-link {
  border: none;
}
.btn-primary {
  background-color: #3fcfbb;
  border-color: #2fb2a0;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  background-color: #38c2af;
  border-color: #2aa493;
}
.btn-success {
  background-color: #8dc859;
  border-color: #77ab49;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  background-color: #77ab49;
}
.btn-danger {
  background-color: #fe635f;
  border-color: #dd504c;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  background-color: #dd504c;
}
.btn-warning {
  background-color: #f1c40f;
  border-color: #d5ac08;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  background-color: #e0b50a;
  border-color: #bd9804;
}

.icon-box {
}
.icon-box .btn {
  border: 1px solid #e1e1e1;
  margin-left: 3px;
  margin-right: 0;
}
.icon-box .btn:hover {
  background-color: #eee;
  color: #2bb6a3;
}

a {
  color: #2bb6a3;
  outline: none !important;
}
a:hover,
a:focus {
  color: #2bb6a3;
}

/*------------------------------------TABLES---------------------------------------------------- */
.table {
  border-collapse: separate;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #eee;
}
.table thead > tr > th {
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 0;
}
.table tbody > tr > td {
  font-size: 0.875em;
  background: #f5f5f5;
  border-top: 10px solid #fff;
  vertical-align: middle;
  padding: 12px 8px;
}
.table tbody > tr > td:first-child,
.table thead > tr > th:first-child {
  padding-left: 20px;
}
.table thead > tr > th span {
  border-bottom: 2px solid #c2c2c2;
  display: inline-block;
  padding: 0 5px;
  padding-bottom: 5px;
  font-weight: normal;
}
.table thead > tr > th > a span {
  color: #344644;
}
.table thead > tr > th > a span:after {
  content: "\f0dc";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  font-size: 0.75em;
}
.table thead > tr > th > a.asc span:after {
  content: "\f0dd";
}
.table thead > tr > th > a.desc span:after {
  content: "\f0de";
}
.table thead > tr > th > a:hover span {
  text-decoration: none;
  color: #2bb6a3;
  border-color: #2bb6a3;
}
.table.table-hover tbody > tr > td {
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
}
.table tbody tr td .call-type {
  display: block;
  font-size: 0.75em;
  text-align: center;
}
.table tbody tr td .first-line {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.125em;
}
.table tbody tr td .first-line span {
  font-size: 0.875em;
  color: #969696;
  font-weight: 300;
}
.table tbody tr td .second-line {
  font-size: 0.875em;
  line-height: 1.2;
}
.table a.table-link {
  margin: 0 5px;
  font-size: 1.125em;
}
.table a.table-link:hover {
  text-decoration: none;
  color: #2aa493;
}
.table a.table-link.danger {
  color: #fe635f;
}
.table a.table-link.danger:hover {
  color: #dd504c;
}

.table-products tbody > tr > td {
  background: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
  position: relative;
}
.table-products tbody > tr:hover > td {
  text-decoration: none;
  background-color: #f6f6f6;
}
.table-products .name {
  display: block;
  font-weight: 600;
  padding-bottom: 7px;
}
.table-products .price {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .price > i {
  color: #8dc859;
}
.table-products .warranty {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .warranty > i {
  color: #f1c40f;
}
.table tbody > tr.table-line-fb > td {
  background-color: #9daccb;
  color: #262525;
}
.table tbody > tr.table-line-twitter > td {
  background-color: #9fccff;
  color: #262525;
}
.table tbody > tr.table-line-plus > td {
  background-color: #eea59c;
  color: #262525;
}
.table-stats .status-social-icon {
  font-size: 1.9em;
  vertical-align: bottom;
}
.table-stats .table-line-fb .status-social-icon {
  color: #556484;
}
.table-stats .table-line-twitter .status-social-icon {
  color: #5885b8;
}
.table-stats .table-line-plus .status-social-icon {
  color: #a75d54;
}

.daterange-filter {
  background: none repeat scroll 0 0 #ffffff;
  border: 1px solid #cccccc;
  cursor: pointer;
  padding: 5px 10px;
}
.filter-block .form-group {
  margin-right: 10px;
  position: relative;
}
.filter-block .form-group .form-control {
  height: 36px;
}
.filter-block .form-group .search-icon {
  position: absolute;
  color: #707070;
  right: 8px;
  top: 11px;
}
.filter-block .btn {
  margin-left: 5px;
}
@media only screen and (max-width: 440px) {
  .filter-block {
    float: none !important;
    clear: both;
  }
  .filter-block .form-group {
    float: none !important;
    margin-right: 0;
  }
  .filter-block .btn {
    display: block;
    float: none !important;
    margin-bottom: 15px;
    margin-left: 0;
  }
  #reportrange {
    clear: both;
    float: none !important;
    margin-bottom: 15px;
  }
}

.tabs-wrapper .tab-content {
  margin-bottom: 20px;
  padding: 0 10px;
}

/* RECENT - USERS */
.widget-users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.widget-users li {
  border-bottom: 1px solid #ebebeb;
  padding: 15px 0;
  height: 96px;
}
.widget-users li > .img {
  float: left;
  margin-top: 8px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
.widget-users li > .details {
  margin-left: 60px;
}
.widget-users li > .details > .name {
  font-weight: 600;
}
.widget-users li > .details > .name > a {
  color: #344644;
}
.widget-users li > .details > .name > a:hover {
  color: #2bb6a3;
}
.widget-users li > .details > .time {
  color: #2bb6a3;
  font-size: 0.75em;
  padding-bottom: 7px;
}
.widget-users li > .details > .time.online {
  color: #8dc859;
}

//-----------------------Conversation---------------------------
.conversation-inner {
  padding: 0 0 5px 0;
  margin-right: 10px;
}
.conversation-item {
  padding: 5px 0;
  position: relative;
}
.conversation-user {
  width: 50px;
  height: 50px;
  overflow: hidden;
  float: left;
  border-radius: 50%;
  margin-top: 6px;
}
.conversation-body {
  background: $chat-me-color;
  font-size: 0.875em;
  width: auto;
  margin-left: 60px;
  padding: 8px 10px;
  position: relative;
}
.conversation-body:before {
  border-color: transparent #f5f5f5 transparent transparent;
  border-style: solid;
  border-width: 6px;
  content: "";
  cursor: pointer;
  left: -12px;
  position: absolute;
  top: 25px;
}
.conversation-item.item-right .conversation-body {
  background: $chat-companion-color;
}
.conversation-item.item-right .conversation-body:before {
  border-color: transparent transparent transparent #dcfffa;
  left: auto;
  right: -12px;
}
.conversation-item.item-right .conversation-user {
  float: right;
}
.conversation-item.item-right .conversation-body {
  margin-left: 0;
  margin-right: 60px;
}
.conversation-body > .name {
  font-weight: 600;
  font-size: 1.125em;
}
.conversation-body > .time {
  position: absolute;
  font-size: 0.875em;
  right: 10px;
  top: 0;
  margin-top: 10px;
  color: #605f5f;
  font-weight: 300;
}
.conversation-body > .time:before {
  content: "\f017";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-top: 4px;
  font-size: 0.875em;
}
.conversation-body > .text {
  padding-top: 6px;
}
.conversation-new-message {
  padding-top: 10px;
}

textarea.form-control {
  height: auto;
}
.form-control {
  border-radius: 0px;
  border-color: #e1e1e1;
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
