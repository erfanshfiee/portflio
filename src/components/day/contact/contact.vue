<template>
  <section id="contact" class="centerFlex">
    <div class="wrapper centerFlex maxIs extraPadding">
      <Title title="CONTACT" text="Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"/>
      <div class="row centerFlex">
        <card
            v-for="list in lists"
            :key="list.id"
            :icon="list.icon"
            :title="list.title"
            :text="list.text"
            :id="list.id"
        />
      </div>
      <div class="row centerFlex forms">
          <Forms/>
      </div>
    </div>
  </section>
</template>

<script>
import card from "@/components/day/contact/card";
import Title from "@/components/ul/Title";
import Forms from "@/components/day/contact/form";
import scrollAnimate from "@/utils/fadeElementsIn";
import {onMounted} from 'vue'
export default {
  setup(){
    onMounted(()=>{
      const adress=document.querySelector('#contactAdress')
      const email=document.querySelector('#contactEmail')
      const phone=document.querySelector('#contactPhone')
      const submit=document.querySelector('#submit')
      scrollAnimate(adress,email,phone,submit)
    })
    const lists=[
      {
        title:'Our Address',
        text:'A108 Adam Street, New York, NY 535022',
        icon:'map',
        id:'contactAdress'
      },
      {
        title:'Email Us',
        text:'erfangale@gmail.com',
        icon:'email2',
        id:'contactEmail'

      },
      {
        title:'Call Us',
        text:'09367134752',
        icon:'map',
        id:'contactPhone'

      },

    ]
    return{
      lists
    }
  },
  name: "contact",
  components:{
    Title,
    card,
    Forms,
  }
}
</script>

<style scoped>
#contact{
  padding-top: 40px;
  padding-bottom: 50px;
}
.wrapper{
  flex-direction: column;
}
.row{
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
>>> #contactAdress{
  width: 100%;
  max-width: 550px;
}
.row{
  margin-top: 20px;
}
>>>#contactEmail .wrapper,>>>#contactPhone .wrapper{
  padding: 40px 50px 40px 50px;
}
.forms{
  justify-content: center;
}
@media (max-width: 530px) {
  .row{
    flex-direction: column;
  }

}

@media (max-width: 960px) {
  >>> #contactAdress{
    max-width: 100%;
  }

}
</style>