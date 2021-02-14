<template>
  <div class="conversation-item clearfix" :class='{"item-right":message.side,"item-left":!message.side}'>
    <div class="conversation-user">
      <img
        src="https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"
        class="img-responsive img-fluid"
        alt=""
      />
    </div>
    <div class="conversation-body">
      <div class="name">{{name}}</div>
      <div class="time hidden-xs">{{message.date|dateMessage}}</div>
      <div class="text">
        {{message.message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>{
        return{
        }
    },
    computed: {
      name:function(){
        console.log(this.message);
        return this.$store.getters.StateUser.username;
      }
    },
    props:{
        message:Object,
    }
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";

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
    color:$second-color;

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
</style>
