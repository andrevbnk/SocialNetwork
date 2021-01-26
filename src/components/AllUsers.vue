<template>
  <div v-if="!allUser"></div>
  <div class="container bootstrap snippets bootdey" v-else>
    <div class="row">
      <h2 class="text-primary title">
        <span class="glyphicon glyphicon-align-justify"></span>Все пользователи
      </h2>
      <div class="col-lg-12">
        <input
          type="search"
          class="form-control"
          id="input-search"
          placeholder="Искать по username или email..."
          v-model="filter"
        />
      </div>
      <div class="searchable-container">
        <div
          class="items col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix"
          v-for="(user, key) in allUserFilter"
          :key="key"
        >
          <div class="info-block block-info clearfix">
            <div class="pull-left">
              <router-link :to="'/profile/' + user._id"
                ><img :src="user.data.img" alt="" class="square-box"
              /></router-link>
            </div>
            <h5 class="text-success pt-3">{{ user.data.username }}</h5>
            <h6>Email: {{ user.email }}</h6>
            <h6>
              Дата создания: <b>{{ user.data.dataCreated | dateFormate }}</b>
            </h6>
          </div>
        </div>
        <div v-if="allUserFilter == false">Ничего не найдено,попробуйте ещё</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from 'vuex';
export default {
  data: () => {
    return {
      allUser: false,
      filter: "",
    };
  },
  created() {
    this.axiosData();
  },
  methods: {
    ...mapMutations(["showLoader"]),
    axiosData() {
      this.showLoader();
      axios.get("/allUser").then((res) => {
        this.allUser = res.data.allUser;
      });
    },
  },
  computed: {
    allUserFilter() {
      let filterUser = this.allUser.filter(
        (obj) =>
          obj.data.username == this.filter || obj.email == this.filter || !this.filter
      );
      console.log(filterUser);
      return filterUser;
    },
  },
};
</script>

<style lang="scss" scopedSlots>
.title {
  margin-left: 20px;
}

.fa-user {
  font-size: 80px;
}

.searchable-container {
  margin-top: 40px;
  width: 100%;
}

.glyphicon-lg {
  font-size: 4em;
}
.info-block {
  border-right: 5px solid #e6e6e6;
  margin-bottom: 25px;
}
.info-block .square-box {
  width: 120px;
  min-height: 120px;
  margin-right: 22px;
  text-align: center !important;
  background-color: #676767;
  padding: 20px 0;
}
.info-block:hover .info-block.block-info {
  border-color: #20819e;
}
.items {
  float: left;
}
.info-block.block-info .square-box {
  color: #fff;
}
</style>
