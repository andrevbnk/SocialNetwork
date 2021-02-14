<template>
  <div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab" >
    <div class="conversation-wrapper">
      <div class="conversation-content">
        <div
          class="slimScrollDiv"
          style="position: relative; overflow: auto; width: auto; height: 340px"
        >
          <div
            class="conversation-inner"
            style="overflow: auto; width: auto; height: 340px"
          >
            <div class="allMessages" v-for='message in messages' :key="message.id">
              <ChatMessage :message="message" />
            </div>

          </div>
          <div
            class="slimScrollBar"
            style="
              width: 7px;
              position: absolute;
              top: 0px;
              opacity: 0.4;
              display: block;
              border-radius: 7px;
              z-index: 99;
              right: 1px;
              background: rgb(0, 0, 0);
            "
          ></div>
          <div
            class="slimScrollRail"
            style="
              width: 7px;
              height: 100%;
              position: absolute;
              top: 0px;
              display: none;
              border-radius: 7px;
              opacity: 0.2;
              z-index: 90;
              right: 1px;
              background: rgb(51, 51, 51);
            "
          ></div>
        </div>
      </div>
      <div class="conversation-new-message">
        <form @submit.prevent="send">
          <div class="form-group">
            <textarea
              class="form-control"
              rows="2"
              placeholder="Введите сообщение..."
              v-model="newMessage"
            ></textarea>
          </div>

          <div class="clearfix">
            <button type="submit" class="btn btn-success pull-right">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatMessage from "./ChatMessage.vue";
import axios from "axios";
export default {
  props: {
    idProfile: String,
  },
  data: () => {
    return {
      newMessage: null,
      messages: null,
    };
  },
  components: {
    ChatMessage,
  },
  methods: {
    ...mapGetters(["StateUser"]),
    // downScroll(){
    //     this.$nextTick(() => {
    //         this.$refs.toolbarChat.scrollTop = 0;
    //     });
    // },
    send() {
      this.$socket.emit(
        "message",
        {
          message: this.newMessage,
          token: this.StateUser().accessToken,
          idProfile: this.idProfile,
        },
        (data) => {
          this.messages = data?data.messages:null;
          console.log(this.messages);
        }
      );
      // this.downScroll();
    },
    loadMessage() {
        //  this.downScroll();
      axios.get("/profile/loadMessage/" + this.idProfile).then((res) => {
        this.messages = res.data.messages;
      });
    },
  },
  created() {
    this.loadMessage();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
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
