<template>
  <div class="container">
    <div class="row">
      <div class="col sign-form-info"><SignInfo /></div>
      <div class="sign-form col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SignInfo from "@/components/SignForm/SingInfo";


export default {
  name: "SignForm",
  data: () => {
    return {};
  },
  components: {
    SignInfo,
  },
};
</script>

<style lang="scss" scopedSlots>
.sign-form-info{
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
}
.container{
  height: 100%;
}
.row{
  height: 100%;
}
.sign-form{
  display: grid;
  align-items: center;
}
// .sign-page {
//   display: grid;
//   width: 100%;
//   height: 100%;
//   align-content: center;

//   gap: 4px;
//   grid-auto-flow: column;
// }

// .sign-form {
//   display: grid;
//   grid-auto-flow: column;
//   gap: 4px;
//   align-items: center;
//   justify-items: left;
// }
</style>
