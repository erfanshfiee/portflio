<template>
  <div :data-delay="delay" class="ServicesCard centerFlex hideDown" >
    <div class="wrapper centerFlex">
      <div class="logo">
        <component :is="logo"></component>
      </div>
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="text">
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ball from "@/components/svgs/ball";
import play from "@/components/svgs/play";
import arch from "@/components/svgs/arch";
import note from "@/components/svgs/note";
import tochometer from "@/components/svgs/tochometer";
import world from "@/components/svgs/world";

export default {
  name: "Cards",
  props:['title','text','logo','delay'],
  components:{
    ball,
    play,
    arch,
    note,
    tochometer,
    world
  }
}
</script>

<style scoped>
.logo{
  position: relative;
  background: var(--logo-red);
  width: 63px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;


}
.logo >>> svg{
  width: 24px;
  height: 24px;
}
.logo::before{
  content: '';
  position: absolute;
  background: #fce5e5;
  right: 8px;
  bottom: 8px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-color 0.3s ease-in-out;


}
.logo >>> path{
  fill:white;
  transition: fill 0.3s ease-in-out;

}
.ServicesCard{
  width: 360px;
  line-height:3rem;
flex-direction: column;
  margin:10px;
  box-shadow: 0px 2px 15px rgba(0 ,0 ,0,0.1);
  height: 335px;
  transition: background-color 0.3s ease-in-out;
}
p{
  text-align: center;
  line-height: 1.5rem;
  font-weight: bold;
}
h1,p{
  text-align: center;
}
.wrapper{
  flex-direction: column;
  width: 95%;
  transition: all 0.3s ease-in-out;
}
.ServicesCard:hover{
  background: var(--logo-red);
}
.ServicesCard:hover .wrapper{

  transform: translateY(-10px);
}
.ServicesCard:hover .text,.ServicesCard:hover .title{
  color:white
}
.ServicesCard:hover >>> path{
  fill: var(--logo-red);
}
.ServicesCard:hover .logo{
  background: white;
}
.ServicesCard:hover .logo::before{
  background: red;
}
@media (max-width: 960px) {
  .ServicesCard{
    width: 100%;
  }

}
</style>