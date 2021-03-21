<template>
  <div class="item">
    <a href="#"><twitter/></a>
  </div>
  <div class="item">
    <a href="#"><facebook/></a>
  </div>
  <div class="item">
    <a href="#"><insta/></a>
  </div>
  <div class="item">
    <a href="#"><linkedin/></a>
  </div>
</template>

<script>
import twitter from "@/components/svgs/twitter";
import facebook from "@/components/svgs/facebook";
import insta from "@/components/svgs/insta";
import linkedin from "@/components/svgs/linkedin";

export default {
  name: "icons",
  components:{
    twitter,
    facebook,
    insta,
    linkedin
  }
}
</script>

<style scoped>
.item svg{
  width: 17px;
  height: 17px;
}
a{
  height: 17px;
}
.item{
  height: 17px;
}
</style>