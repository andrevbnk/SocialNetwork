<template>
  <div class="ContractCard">

    <div class="img">
      <img
        src="https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"
        class="img-responsive img-fluid"
        alt=""
      />
    </div>
    <div class="details">
      <div class="name">
        <a href="#">HR</a>
      </div>
      <div class="time"><i class="fa fa-clock-o"></i> Был(а) в онлайн 5 лет назад</div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

.ContractCard > .img {
  float: left;
  margin-top: 8px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
.ContractCard .details {
  margin-left: 60px;
}
.ContractCard .details > .name {
  font-weight: 600;
}
.ContractCard .details > .name > a {
  color: #344644;
}
.ContractCard .details > .name > a:hover {
  color: #2bb6a3;
}
.ContractCard .details > .time {
  color: #2bb6a3;
  font-size: 0.75em;
  padding-bottom: 7px;
}
.ContractCard .details > .time.online {
  color: #8dc859;
}

</style>
