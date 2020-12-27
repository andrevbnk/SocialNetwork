<template>
  <div class="sign-page">
    <SignInfo />

    <div class="sign-form">
        <router-view/>
    </div>
    
  </div>
</template>

<script>
import SignInfo from "@/components/SignForm/SingInfo";
// @ is an alias to /src

export default {
  name: "SignForm",
  data: ()=>{
    return{

  }},
  components: {

    SignInfo,
  },

};
</script>

<style lang="scss">
.sign-page {
  display: grid;
  width: 100%;
  height: 100%;
  align-content: center;

  gap: 4px;
  grid-auto-flow: column;
}

.sign-form{
    display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: left;
}
</style>
