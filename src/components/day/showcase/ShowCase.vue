<template>
  <section id="text">
    <div class="image centerFlex extraPadding">
      <div data-delay="1500" ref="text" class="text maxIs hideDown">
        <h1>WELCOME TO DAY</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <button> GET STARTED</button>
      </div>
    </div>
  </section>
</template>

<script>
import scrollAnimate from "@/utils/scrollAnimate";
import {ref,onMounted} from 'vue'
export default {
name: "ShowCase",
  setup(){
    const text=ref(null)
    onMounted(()=>{
      scrollAnimate(text.value)
    })
return{
      text
}
  }
}
</script>

<style scoped>
button{
  border:2px solid white;
  padding:10px 20px;
  background: transparent;
  font-family: 'rail';
  font-weight: bold;
  font-size: 14px;
  color: white;
}
.image{
  background: url("/images/image/hero-bg.jpg") fixed top center;
  background-size: cover;
  width: 100%;
  height: 95vh;
  position: relative;
  align-items: flex-start;
}
.image::before{
  content: '';
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  position: absolute;
}
p{
  color:white;
  font-size: 24px;
  margin: 20px 0 30px;
}
.text{
  position: relative;
  margin-top: 130px;
}
h1{
  font-size: 48px;
  color:white;
  font-family: 'rail';
}
@media (max-width: 700px) {
  .text{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text p{
    text-align: center;
    font-weight: bold;
  }
  h1{
    text-align: center;
  }

}
</style>