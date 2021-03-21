<template>
  <div class=" centerFlex item">
    <email class="email svg" color="#cc1616"/><span>&nbsp;</span>
    <a href='mailto:erfangale@gmail.com'>erfangale@gmail.com</a>
  </div>
  <div class="centerFlex item">
    <mobile class="mobile svg" color="#cc1616"/><span>&nbsp;</span>
    <a href='tel:09367134752'>09367134752</a>
  </div>

</template>

<script>
import mobile from "@/components/svgs/mobile";
import email from "@/components/svgs/email";
export default {
  name: "connect",
  components:{
    mobile,
    email
  }
}
</script>

<style scoped>
a{

  text-decoration: none;
  font-family: 'open';
  font-size: 15px;
  font-weight: 600;
}
.svg{
  width: 15px;
  height: 15px;
}
@media (max-width: 350px) {
  .item{
    width: 220px;
    justify-content: space-between;
  }
  .item:nth-child(2)
  {
    margin-top: 10px;
  }

}
</style>