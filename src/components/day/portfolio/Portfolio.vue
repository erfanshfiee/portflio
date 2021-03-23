<template>
  <section id="portfolio" class="centerFlex">
    <div class="wrapper maxIs extraPadding centerFlex">
      <Title title="PORTFOLIO" text="Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"/>
      <Controls :change="change"/>
      <Images/>
    </div>
  </section>
</template>

<script>
import Title from "@/components/ul/Title";
import Controls from "@/components/day/portfolio/Controls";
import Images from "@/components/day/portfolio/Images";
import {ref} from 'vue'
export default {
  setup(){
    const showCase=ref('')
    function change(){

    }
    return{
      showCase,
      change
    }
  },
name: "Portfolio",
  components:{
    Title,
    Controls,
    Images
  }
}
</script>

<style scoped>
#portfolio{
  padding-top: 40px;
}
.wrapper{
  flex-direction: column;
}
</style>