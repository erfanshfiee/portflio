<template>
<teleport to="body">
  <div class="backGround" v-if="isMenuOpen"></div>
  <div id="sideBar" :class="{open:isMenuOpen}">
    <ul>
      <li><a href="#text">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li></li>
      <li><a href="">Contact</a></li>
    </ul>
  </div>
</teleport>
</template>

<script>
import {inject} from 'vue'
export default {
  name: "sideBar",
  setup(){
    const isMenuOpen=inject('isMenuOpen')
    return{
      isMenuOpen
    }
  }
}
</script>

<style scoped>
#sideBar{
  width: 200px;
  height: 100%;
  position: fixed;
  background: #191919;
  top: 0;
  left: 0;
  z-index: 10000000;
  transform: translateX(-200px);
  transition: all 0.4s ease-in-out;
  overflow: auto;
}
.backGround{
  width: 100%;
  background: rgba(0,0,0,0.5);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
ul{
  display: flex;
  flex-direction: column;
  line-height: 3rem;
  padding:20px;
}
li{
  list-style-type: none;
}
a{
  text-decoration: none;
  color: white;
}
.open{
  transform: translateX(0) !important;
}
</style>