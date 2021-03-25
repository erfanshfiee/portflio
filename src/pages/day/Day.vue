<template>
  <side-bar/>
  <topbar/>
  <Header/>
  <section id="rest">
    <Show-case/>
    <about/>
    <Clients/>
    <Services/>
    <Contact/>
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
import Contact from "@/components/day/contact/contact";
import footers from "@/components/day/footer/footer";
import {onMounted, ref, provide} from 'vue'
import checkMenuEnambles from "@/utils/checkMenuEnambles";

export default {
  setup() {
    const isMenuOpen = ref(false)
    let topbar
    let links
    let sideBarNavs
    let showCase
    let about
    let services
    let contact
    let footer
    let sections
    function checkFixedNavigation() {
      const height = window.getComputedStyle(topbar).height
      if (window.scrollY >= Number.parseInt(height)) {
        const target = document.querySelector('header')
        const rest = document.querySelector('#rest')
        rest.classList.add('restDown')
        target.classList.add('fixedHeader')
      } else {
        const target = document.querySelector('header')
        const rest = document.querySelector('#rest')
        rest.classList.remove('restDown')
        target.classList.remove('fixedHeader')
      }
    }

    provide('isMenuOpen', isMenuOpen)
    onMounted(() => {
      topbar = document.querySelector('#topbar')
      window.addEventListener('scroll', checkFixedNavigation)
      checkFixedNavigation();
    })


    function clearNav() {
      links.forEach(link => {
        link.classList.remove('active')
      })
      sideBarNavs.forEach(link => {
        link.classList.remove('sideBarLinkActive')
      })
    }

    function checkNavigationActiveness(entries) {
      const scrolled = window.scrollY + 200
      sections.forEach(section => {
        if (scrolled >= section.offsetTop && scrolled <= (section.offsetTop + section.offsetHeight)) {
          clearNav()
          links.forEach(link => {
            if (link.dataset.target === section.id) {
              link.classList.add('active')
            }
          })

          sideBarNavs.forEach(link => {
            if (link.dataset.target === section.id) {
              link.classList.add('sideBarLinkActive')
            }
          })
        }
      })

    }

    onMounted(() => {
      showCase = document.querySelector('#text')
      about = document.querySelector('#aboute')
      services = document.querySelector('#Services')
      contact = document.querySelector('#contact')
      footer = document.querySelector('footer')
      sections = [showCase, about, services, contact, footer]
      links = document.querySelectorAll('nav a')
      sideBarNavs = document.querySelectorAll('.sideBarLinks')
      // const {checkNavs}=checkMenuEnambles(sections,links)


      window.addEventListener('scroll', checkNavigationActiveness)
      checkNavigationActiveness();

    })
  },
  name: "Day",
  components: {
    topbar,
    Header,
    ShowCase,
    about,
    Clients,
    Services,
    footers,
    sideBar,
    Contact
  }
}
</script>

<style scoped>
#rest {
  transition: all 0s ease-in-out;
}
</style>