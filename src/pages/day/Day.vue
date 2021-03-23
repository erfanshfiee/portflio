<template>
  <side-bar/>
  <topbar/>
    <Header/>
  <section id="rest">
    <Show-case/>
    <about/>
    <Clients/>
    <Services/>
    <footers/>
  </section>
</template>

<script>
import sideBar from "@/components/day/header/sideBar/sideBar";
import topbar from "@/components/day/topbar/topbar";
import Header from "@/components/day/header/Header";
import ShowCase from "@/components/day/showcase/ShowCase";
import about from "@/components/day/about/about";
import Clients from "@/components/day/clients/Clients";
import Services from "@/components/day/services/Services";
import footers from "@/components/day/footer/footer";
import {onMounted,ref,provide} from 'vue'
export default {
  setup(){
    const isMenuOpen=ref(false)
    provide('isMenuOpen',isMenuOpen)
    onMounted(()=>{
      const topbar=document.querySelector('#topbar')
      window.addEventListener('scroll',()=>{
        const height=window.getComputedStyle(topbar).height
        if(window.scrollY>=Number.parseInt(height)){
          const target = document.querySelector('header')
          const rest = document.querySelector('#rest')
          rest.classList.add('restDown')
          target.classList.add('fixedHeader')
        }else{
          const target = document.querySelector('header')
          const rest = document.querySelector('#rest')
          rest.classList.remove('restDown')
          target.classList.remove('fixedHeader')
        }
      })
    })
  },
  name: "Day",
  components:{
    topbar,
    Header,
    ShowCase,
    about,
    Clients,
    Services,
    footers,
    sideBar
  }
}
</script>

<style scoped>
#rest{
  transition: all 0s ease-in-out;
}
</style>