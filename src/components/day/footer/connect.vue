<template>
  <div class="footerConnect centerFlex">
    <h1 class="singleFooterConnectIterm">DAY</h1>

    <div class="address singleFooterConnectIterm">
      <p>A108 Adam Street</p>
      <p>NY 535022, USA</p>
    </div>

    <div class="links singleFooterConnectIterm">
      <div class="link">
        <p><span>Phone</span>: <a href="tel:09367134752">09367134752</a></p>
        <p><span>Email</span>: <a href="mailto:erfangale@gmail.com">erfangale@gmail.com</a></p>
      </div>
    </div>

    <div class="icons singleFooterConnectIterm centerFlex">
      <div class="icon centerFlex"><twitter/></div>
      <div class="icon centerFlex"><facebook/></div>
      <div class="icon centerFlex"><insta/></div>
      <div class="icon centerFlex"><skype/></div>
      <div class="icon centerFlex"><linkedin/></div>
    </div>
  </div>
</template>

<script>
import facebook from "@/components/svgs/facebook";
import insta from "@/components/svgs/insta";
import skype from "@/components/svgs/skype";
import linkedin from "@/components/svgs/linkedin";
import twitter from "@/components/svgs/twitter";
export default {
  name: "connect",
  components: {
    twitter,
    facebook,
    insta,
    skype,
    linkedin
  }
}
</script>

<style scoped>
h1{
  font-weight: bold;
  font-family: rail;
}
.footerConnect{
  border-top: 4px solid var(--logo-red);
color:white;
  max-width:380px;
  width: 100%;
  flex-direction: column;
  background: #191919
}
.icons{
  flex-wrap: wrap;
  display: flex;
}
.icon{
  width: 36px;
  height: 36px;
  background: #262626;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s linear;
}
.icon:hover{
background: #cc1616;
}
.icon>>>svg{
  width: 18px;
  height: 18px;
}
span{
  font-weight: bold;
}
.singleFooterConnectIterm{
  margin-top: 20px;
}
a{
  color: white;
  text-decoration: none;
}
</style>