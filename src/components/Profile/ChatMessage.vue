<template>
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
        Normally, both your asses would be dead as fucking fried chicken, but you happen
        to pull this shit while I'm in a transitional period so I don't wanna kill you, I
        wanna help you.
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>{
        return{}
    },
    props:{
        message:String,
        id:String,
        side:Boolean,
    }
};
</script>

<style></style>
