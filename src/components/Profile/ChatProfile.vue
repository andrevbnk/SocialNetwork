<template>
  <div class="tab-pane fade" id="tab-chat">
    <div class="conversation-wrapper">
      <div class="conversation-content">
        <div
          class="slimScrollDiv"
          style="position: relative; overflow: hidden; width: auto; height: 340px"
        >
          <div
            class="conversation-inner"
            style="overflow: hidden; width: auto; height: 340px"
          >
            <div class="conversation-item item-left clearfix">
              <div class="conversation-user">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="conversation-body">
                <div class="name">Ryan Gossling</div>
                <div class="time hidden-xs">September 21, 2013 18:28</div>
                <div class="text">
                  I don't think they tried to market it to the billionaire, spelunking,
                  base-jumping crowd.
                </div>
              </div>
            </div>
            <div class="conversation-item item-right clearfix">
              <div class="conversation-user">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="conversation-body">
                <div class="name">Mila Kunis</div>
                <div class="time hidden-xs">September 21, 2013 12:45</div>
                <div class="text">
                  Normally, both your asses would be dead as fucking fried chicken, but
                  you happen to pull this shit while I'm in a transitional period so I
                  don't wanna kill you, I wanna help you.
                </div>
              </div>
            </div>
            <ChatMessage />
            <div class="conversation-item item-right clearfix">
              <div class="conversation-user">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="conversation-body">
                <div class="name">Mila Kunis</div>
                <div class="time hidden-xs">September 21, 2013 12:45</div>
                <div class="text">
                  Normally, both your asses would be dead as fucking fried chicken, but
                  you happen to pull this shit while I'm in a transitional period so I
                  don't wanna kill you, I wanna help you.
                </div>
              </div>
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
import axios from 'axios';
export default {
  props: {
    idProfile: String,
  },
  data: () => {
    return {
      newMessage: null,
      room: null,
    };
  },
  components: {
    ChatMessage,
  },
  methods: {
    ...mapGetters(["StateUser"]),
    send() {
      this.$socket.emit(
        "message",
        {
          message: this.newMessage,
          token: this.StateUser().accessToken,
          idProfile: this.idProfile,
        },
        (data) => {
          console.log("Ok", data);
        }
      );
    },
    loadMessage() {
      axios.get("/profile/loadMessage/"+this.idProfile).then((res) => {
        this.room = res.data.room;
        console.log(res);
      });
    },
  },
  created() {
    this.loadMessage();
  },
};
</script>

<style></style>
