<template>
  <div v-if="isVisible" class="loader-overlay">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    isVisible: { type: Boolean, required: true, default: false },
    text: { type: String, required: false, default: "" },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.loader-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  cursor: pointer;
  .lds-dual-ring {
    display: inline-block;
    position: relative;
    top:40%;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
