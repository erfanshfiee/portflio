<template>
  <div class="useFullLinks">
    <div class="wrapper">
      <h1>{{title}}</h1>
      <ul class="centerFlex">
        <li class="centerFlex" v-for="item in items" :key="item">
          <component :is="icon"/>
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import chervon from "@/components/svgs/chervon";
export default {
name: "usefullLinks",
  props:['icon','title','items'],
  components:{
  chervon
  }
}
</script>

<style scoped>
.useFullLinks{
  color:white;
  margin: 10px;
  margin-top: 0;
}
>>>svg{
  width: 10px;
  height: 10px;

}
>>>path{
  fill: #ed5b5b;
}
li{
  list-style-type: none;

}
ul{
  flex-direction: column;
  align-items: flex-start;
  line-height: 2.3rem;
  margin-top: 15px;
}
h1{
  font-size: 16px;
}
p{
  font-weight: bold;
  font-size: 14px;
  padding-left: 5px;
}
@media (max-width: 350px) {
  .useFullLinks{
    width: 100%;
    align-self: flex-start;
  }

}
</style>