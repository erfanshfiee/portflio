<template>
  <section ref="topbar" id="topbar" class="topbar centerFlex">
    <div class=" centerFlex wrapper maxIs extraPadding">
      <div class="centerFlex connect">
          <connect/>
      </div>
      <div class="centerFlex icons">
        <icons/>
      </div>
    </div>
  </section>
</template>

<script>
import connect from "@/components/day/topbar/connect/connect";
import icons from "@/components/day/topbar/icons/icons";
import fixedHeader from "@/utils/fixedHeader";
import {onMounted,ref} from 'vue'
export default {
  setup(){
    const topbar=ref(null)
    // onMounted(()=>{
    //   fixedHeader(topbar.value)
    // })
    return{
      topbar
    }
  },
  name: "topbar",
  components:{
    connect,
    icons
  }

}
</script>

<style scoped>

.topbar{
  background: #191919;
  height: max-content;
  padding: 10px;

}
.wrapper{
  justify-content: space-between;
}
.connect{
  justify-content: space-between;
  width: 300px;
}
.icons{
  width: 150px;
  justify-content: space-around;
  text-align: center;
  height: 20px;
}
.topbar >>> a{
  color: rgba(255, 255, 255, 0.6);
}
@media (max-width: 540px) {
  .icons{
    display: none;
  }
  .wrapper{
    justify-content: center;
  }

}
@media (max-width: 350px) {
  .connect{
    flex-direction: column;
    width: 100%;
  }

}
</style>