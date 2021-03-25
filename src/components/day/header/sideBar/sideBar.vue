<template>
<teleport to="body">
  <div class="backGround" v-if="isMenuOpen"></div>
  <div id="sideBar" :class="{open:isMenuOpen}">
    <ul>
      <li @click="goToSection" data-target="text"><a class="sideBarLinks" data-target="text" href="">Home</a></li>
      <li @click="goToSection" data-target="aboute"><a class="sideBarLinks" data-target="aboute" href="">About</a></li>
      <li @click="goToSection" data-target="Services"><a class="sideBarLinks" data-target="Services" href="">Services</a></li>
      <li @click="goToSection" data-target="contact"><a class="sideBarLinks" data-target="contact" href="">Contact</a></li>
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
    function smoothScroll(target, duration) {
      const targetElement = document.querySelector(target)
      const top = targetElement.getBoundingClientRect().top
      const marginTop = Number.parseFloat(window.getComputedStyle(targetElement).marginTop)
      const paddingTop = Number.parseFloat(window.getComputedStyle(targetElement).paddingTop)
      let headerHeiht = 0
      if (targetElement.id !== 'text') {
        const header = document.querySelector('header')
        headerHeiht = Number.parseFloat(getComputedStyle(header).height)
      }
      const run = Number.parseFloat(top) + Number.parseFloat(window.scrollY) - (marginTop + paddingTop + headerHeiht)

      window.scrollTo(0, run)
        isMenuOpen.value=false

    }

    function cleatActivs() {
      const links = document.querySelectorAll('sideBarLinks a')
      links.forEach(link => {
        link.classList.remove('sideBarLinkActive')
      })
    }

    function goToSection(e) {
      e.preventDefault()
      cleatActivs()
      const el = e.target.closest('li')
      const link = el.querySelector('a')
      link.classList.add('sideBarLinkActive')
      const targetId = el.dataset.target
      smoothScroll(`#${targetId}`, 1000)
    }
    return{
      isMenuOpen,
      goToSection
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
  position: relative;
}
.open{
  transform: translateX(0) !important;
}
</style>