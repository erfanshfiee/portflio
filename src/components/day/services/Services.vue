<template>
  <section id="Services" class="centerFlex extraPadding">
    <div class="wrapper maxIs">
      <Title/>
      <div class="cards centerFlex">
        <Card v-for="(card,i) in cards"
              :key="i"
              :title="card.title"
              :text="card.text"
              :logo="card.logo"
              :delay="i*100"
        >{{ card.logo }}
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/day/services/Title";
import Card from "@/components/day/services/Card";
import {onMounted} from 'vue'
import scrollAnimate from "@/utils/scrollAnimate";
export default {
  name: "Services",
  components: {
    Title,
    Card
  },
  setup() {
    const cards = [
      {
        title: 'Lorem Ipsum',
        text: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
        logo: 'ball'
      },
      {
        title: 'Sed ut perspiciatis',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
        logo: 'note'
      },
      {
        title: 'Magni Dolores',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
        logo: 'tochometer'
      },
      {
        title: 'Nemo Enim',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
        logo: 'world'
      },
      {
        title: 'Dele cardo',
        text: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
        logo: 'play'
      },
      {
        title: 'Divera don',
        text: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
        logo: 'arch'
      }
    ]
    onMounted(()=>{
      const cards=document.querySelectorAll('.ServicesCard')
      scrollAnimate(...cards)
    })
    return {
      cards
    }
  }
}
</script>

<style scoped>
#Services {
  margin-top: 40px;
}
.cards{
  flex-wrap: wrap;
  margin-top: 20px;
  overflow: hidden;
  justify-content: space-evenly;
}
</style>