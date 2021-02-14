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
              <div class="profile-status"><i class="fa fa-check-circle"></i> Онлайн</div>
              <img
                :src="user.data.img"
                alt=""
                class="profile-img img-responsive img-thumbnail center-block"
              />
              <div class="profile-label">
                <span class="label label-danger">Admin</span>
              </div>

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
                  v-if="showRegedit"
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
               
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="action-tab"
                      data-toggle="tab"
                      href="#action"
                      role="tab"
                      aria-controls="action"
                      aria-selected="true"
                      >События</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      >Контакты</a
                    >
                  </li>
                  <li class="nav-item" v-if="showRegedit">
                    <a
                      class="nav-link"
                      id="chat-tab"
                      data-toggle="tab"
                      href="#chat"
                      role="tab"
                      aria-controls="chat"
                      aria-selected="false"
                      >Чат</a
                    >
                  </li>
                </ul>

                <div class="tab-content">
                  <Action />
                  <Contact />
                  <ChatProfile :idProfile="user._id" v-if="showRegedit"/>
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
import Action from "./Action.vue";
import Contact from "./Contact.vue";
import ChatProfile from "./ChatProfile";
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
        GitHub: "fa fa-github",
        Telegram: "fas fa-telegram",
        Instagram: "fa fa-instagram",
        LinkedIn: "fa fa-linkedin-square",
      },
    };
  },
  components: {
    ChatProfile,
    Action,
    Contact,
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
    showRegedit:function(){
      return this.$store.getters.userId == this.$route.params.id
    }
  },
  watch: {
    $route: "axiosData",
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";


.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link
.profile__ava__center {
  background: none !important;
}

.nav-tabs{
  .nav-item{
    a{
      color: $greenless !important;
    }
    & .nav-link.active{
      color: $second-color !important;
    }
  }
}
.nav-tabs .nav-item > a:active{
  color:$darkless
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
  border-left: 10px solid #c2c2c2;
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
  margin: 20px 0px;
  padding: 0 10px;
}

</style>
