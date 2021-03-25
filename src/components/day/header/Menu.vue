<template>
  <nav class="centerFlex">
    <ul class="centerFlex">
      <li @click="goToSection" data-target="text"><a data-target="text" href="#">Home</a></li>
      <li @click="goToSection" data-target="aboute"><a data-target="aboute" href="#">About</a></li>
      <li @click="goToSection" data-target="Services"><a data-target="Services" href="#">Services</a></li>
      <li @click="goToSection" data-target="contact"><a data-target="contact" href="">Contact</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  setup() {
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
    }

    function cleatActivs() {
      const links = document.querySelectorAll('nav a')
      links.forEach(link => {
        link.classList.remove('active')
      })
    }

    function goToSection(e) {
      e.preventDefault()
      cleatActivs()
      const el = e.target.closest('li')
      const link = el.querySelector('a')
      link.classList.add('active')
      const targetId = el.dataset.target
      smoothScroll(`#${targetId}`, 1000)
    }

    return {
      goToSection
    }
  },
  name: 'Menu'
}
</script>
<style scoped>
li {
  list-style-type: none;
  position: relative;
}
a::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  transform:scaleX(0);
  transition: all 0.5s ease-in-out;
  left: 0;
  background: var(--logo-red);
  bottom: 0;
}

a:hover::after {
  transform:scaleX(1);

  background: var(--logo-red);
}

a {
  padding: 25px 15px 24px 15px;
  color: white;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  letter-spacing: 1px;
}

>>> li.span {
  padding: 25px 15px 24px 15px;
  color: white;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
}

>>> li.span:hover {
  background: var(--logo-red);
}

nav {
  height: 100%;
  width: 800px;
  justify-content: flex-end;
display: none;
}

@media (min-width: 600px) {
  nav {
    display: flex;
  }

}
</style>