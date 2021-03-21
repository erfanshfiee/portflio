<template>
  <div v-for="(card,index) in cards" :key="index" :data-delay="index*200" class="AboutMeCard hideDown">
    <div class="wrapper">
      <div class="num">{{card.num}}</div>
      <div class="title">{{card.title}}</div>
      <div class="text">{{card.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props:['cards']
}
</script>

<style scoped>
.AboutMeCard{
  width: 350px;
  box-shadow: 0px 2px 15px rgba(0,0,0,0.1);
  padding:30px;
  transition: all 0.3s ease-in-out;
margin: 20px;
}
.num{
  color: #ed5b5b;
  font-size: 28px;
  font-weight: 700;
  font-family: 'open';
}
.wrapper {
  line-height: 3.5rem;
transition: all 0.3s ease-in-out;
}
.text{
  line-height: 1.5rem;
  color:#aaaaaa
}
.AboutMeCard:hover{
  background: red;
}
.AboutMeCard:hover .wrapper{
  transform: translateY(-20px);
}
.AboutMeCard:hover .num,.AboutMeCard:hover .title,.AboutMeCard:hover .text{
  color:white
}
@media (max-width: 1000px) {
  .AboutMeCard{
    width: 80%;
  }
}
</style>