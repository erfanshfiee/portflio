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

export default {
  setup() {
    const isMenuOpen = ref(false)
    let links

    function clearNav() {
      links.forEach(link => {
        link.classList.remove('active')
      })
    }

    provide('isMenuOpen', isMenuOpen)
    onMounted(() => {
      const topbar = document.querySelector('#topbar')
      window.addEventListener('scroll', () => {
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
      })
    })

    function observerCallBack(entries) {
      const [ent] = entries
      if (ent.isIntersecting) {
        clearNav()
        if (ent.target.id === 'footer')
          return
        links.forEach(link => {
          if (link.dataset.target === ent.target.id) {
            link.classList.add('active')
          }
        })
      }
    }

    onMounted(() => {
      links = document.querySelectorAll('nav a')

      // checkInitialActiveLink()
          const showCase = document.querySelector('#text')
          const about = document.querySelector('#aboute')
          const services = document.querySelector('#Services')
          const contact = document.querySelector('#contact')
          const footer = document.querySelector('footer')
          const items = [showCase, about, services, contact, footer]
          const option = {
            threshold: 0.4
          }
          const observer = new IntersectionObserver(observerCallBack, option)
          items.forEach(item => {
            observer.observe(item)
          })

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