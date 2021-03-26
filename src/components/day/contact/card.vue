<template>
  <div class="centerFlex cardContact hideDown">
    <div class="wrapper centerFlex">
      <div class="iconWrapper centerFlex">
        <component :is="icon" />
      </div>
      <h1>{{title}}</h1>
      <p>{{text}}</p>
    </div>

  </div>
</template>

<script>
import map from "@/components/svgs/map";
import email2 from "@/components/svgs/email2";
import phone from "@/components/day/contact/phone";
export default {
  props:['icon','title','text'],
  name: "address",
  components:{
    map,
    email2,
    phone
  }
}
</script>

<style scoped>
.iconWrapper{
  width: 45px;
  height: 45px;
  border: 2px dotted #f5a0a0;
  border-radius: 50%;
}
>>>svg{
  width:25px;
  height: 25px;
}
>>>path{
  fill: var(--logo-red);
}
.centerFlex{
  flex-direction: column;

}
.cardContact{
  box-shadow: 0 0 30px rgba(214 ,215 ,216 ,0.6);
  margin-top: 20px;
}
.wrapper{
  padding: 40px 30px 40px 30px;
  line-height: 2.5rem;
}
p,h1{
  text-align: center;
}
@media (max-width: 960px) {
  .cardContact{
    width: 100%;
  }

}
</style>