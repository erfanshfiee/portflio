<template>
  <topbar/>
    <Header/>
  <section id="rest">
    <Show-case/>
    <about/>
    <Clients/>
    <Services/>
  </section>
</template>

<script>
import topbar from "@/components/day/topbar/topbar";
import Header from "@/components/day/header/Header";
import ShowCase from "@/components/day/showcase/ShowCase";
import about from "@/components/day/about/about";
import Clients from "@/components/day/clients/Clients";
import Services from "@/components/day/services/Services";
export default {
  name: "Day",
  components:{
    topbar,
    Header,
    ShowCase,
    about,
    Clients,
    Services
  },
  mounted() {
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
  }
}
</script>

<style scoped>
#rest{
  transition: all 0s ease-in-out;
}
</style>