<template>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <ul class="widget-users row">
      <li class="col-md-6">
        <div class="img">
          <img
            src="https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"
            class="img-responsive img-fluid"
            alt=""
          />
        </div>
        <div class="details">
          <div class="name">
            <a href="#">Андрей Морозов</a>
          </div>
          <div class="time online"><i class="fa fa-check-circle"></i> Онлайн</div>
          <div class="type">
            <span class="label label-warning">Ищет работу</span>
          </div>
        </div>
      </li>

      <li class="col-md-6" v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i">
          <ContactCard />
      </li>
    </ul>
    <br />
    <a href="#" class="btn btn-success pull-right">Показать всех друзей</a>
  </div>
</template>

<script>
import ContactCard from "./ContactCard.vue";


export default {components:{ContactCard}};
</script>

<style style="scss">
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

</style>
