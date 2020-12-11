<template>
  <div class="sign-page">
    <SignInfo />

    <div class="sign-form">
        <template v-if="currentRouteName ===  'SignIn' ">
            <SignInForm />
        </template>

        <template v-else-if='currentRouteName === "SignUp" '>
            <SignUpForm />
        </template>
    </div>
    
  </div>
</template>

<script>
import SignInForm from "@/components/SignForm/SignInForm";
import SignUpForm from "@/components/SignForm/SignUpForm";
import SignInfo from "@/components/SignForm/SingInfo";
// @ is an alias to /src

export default {
  name: "SignIn",
  data: ()=>{return{

  }},
  components: {
    SignInForm,
    SignUpForm,
    SignInfo,
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
    }
};
</script>

<style lang="scss">
.sign-page {
  display: grid;
  width: 100vw;
  height: 100vh;
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
