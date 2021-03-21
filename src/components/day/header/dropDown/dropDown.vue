<template>
  <li ref="el" id="dropDown" @mouseleave="hideDropLevelOne" @mouseenter="showDropLevelOne"><p>Drop Down</p>
    <drop-level-one :open="isDropLevelOne"/>


  </li>

</template>

<script>
import dropLevelOne from "@/components/day/header/dropDown/dropLevelOne.vue";
import {ref} from 'vue'

export default {
  name: "dropDown",
  components: {
    dropLevelOne
  },
  setup() {
    const el = ref(null)
    const isDropLevelOne = ref(false)

    function showDropLevelOne() {
      isDropLevelOne.value = true
      const levelOne = document.querySelector('#dropLevelOne')
      levelOne.style.display = 'block'
      setTimeout(()=>{
        levelOne.style.top = '68px'
        levelOne.style.opacity = '1'
      },0)
    }
    function hideDropLevelOne() {
      isDropLevelOne.value = false
      const levelOne = document.querySelector('#dropLevelOne')

        levelOne.style.top = '100px'
        levelOne.style.opacity = '0'

      setTimeout(()=>{levelOne.style.display = 'none'},300)
    }

    return {
      showDropLevelOne,
      hideDropLevelOne,
      isDropLevelOne,
      el
    }
  }
}
</script>

<style scoped>
span {
  padding: 25px 15px 24px 15px;
  color: white;
}

#dropDown {
  position: relative;
}


</style>