<template>
<section  id="clients" class="">
  <div data-delay="0" ref="clients" class="wrapper maxIs hideScale">
    <div class="logo"><img src="/images/image/clients/client-1.png" alt=""></div>
    <div class="logo"><img src="/images/image/clients/client-2.png" alt=""></div>
    <div class="logo"><img src="/images/image/clients/client-3.png" alt=""></div>
    <div class="logo"><img src="/images/image/clients/client-4.png" alt=""></div>
    <div class="logo"><img src="/images/image/clients/client-5.png" alt=""></div>
    <div class="logo"><img src="/images/image/clients/client-6.png" alt=""></div>
  </div>
</section>
</template>

<script>
import {ref,onMounted} from 'vue'
import scrollAnimate from "@/utils/scrollAnimate";
export default {
  name: "Clients",
  setup(){
    const clients=ref(null)
    onMounted(()=>{
      scrollAnimate(clients.value)
    })
    return{
      clients
    }
  }
}
</script>

<style scoped>
#clients{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background: #f2f2f2;
}
img{
  filter: grayscale(100);
  width: 50%;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
}
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:30px;
}
.logo{
  width: 16%;
  display: flex;
  justify-content: center;
}
.logo:hover img{
  filter: grayscale(0);
  transform: scale(1.2);
}
@media (max-width: 970px) {
  .logo{
    width: 33.33%;
  }
  img
  {
    margin-top: 20px;
  }
}
@media (max-width: 380px) {
  .logo{
    width: 50%;
  }
}
</style>