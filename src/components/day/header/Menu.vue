<template>
<nav class="centerFlex">
  <ul class="centerFlex">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Services</a></li>
    <li><a href="">Portfolio</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>
</template>

<script>
import dropDown from "@/components/day/header/dropDown/dropDown";
export default {
  name: "Menu",
  components:{
    dropDown
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
}
a:hover{
  background: var(--logo-red);
}
a{
  padding:25px 15px 24px 15px;
  color:white;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
}
>>> li.span{
  padding:25px 15px 24px 15px;
  color:white;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
}
>>> li.span:hover{
  background: var(--logo-red);
}
nav{
  height: 100%;
  width: 800px;
  justify-content: flex-end;

}
@media (max-width: 960px) {
  nav{
    display: none;
  }

}
</style>