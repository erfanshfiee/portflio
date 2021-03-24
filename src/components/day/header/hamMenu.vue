<template>
  <div class="sikhes" @click="openMenu">
    <div class="sikh1 sikh" :class="{openSikh1:isMenuOpen}"></div>
    <div class="sikh2 sikh" :class="{openSikh2:isMenuOpen}"></div>
    <div class="sikh3 sikh" :class="{openSikh3:isMenuOpen}"></div>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: "hamMenu",
  setup(){

    const isMenuOpen=inject('isMenuOpen')
    window.addEventListener('resize',()=>{
      if(window.innerWidth>690){
        isMenuOpen.value=false
      }

    })
    function openMenu(){
      isMenuOpen.value=!isMenuOpen.value
    }
    return{
      openMenu,
      isMenuOpen
    }
  }
}
</script>

<style scoped>
.sikhes{
  position: relative;
  width: 30px;
  height: max-content;
  z-index: 5555555555555555555;
}
.sikh{
  width: 100%;
  height: 3px;
  background: white;
  transition: all 0.5s ease-in-out;
}
.sikh2{
  margin-top: 5px;
}
.sikh3{
  margin-top: 5px;
}
.openSikh1{
  transform: rotate(45deg) translateY(10px);
}
.openSikh2{
  transform: translateX(-30px);
  opacity: 0;
  transform-origin: center;
}
.openSikh3{
  transform: rotate(-45deg) translateY(-10px) translateX(1px);
}
@media (min-width: 690px) {
  .sikhes{
    display: none;
  }
}
</style>