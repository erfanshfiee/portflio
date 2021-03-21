<template>
  <section id="aboute" class="centerFlex">
    <div class="wrapper extraPadding maxIs">
      <div class="row">
        <Text class="hideLeft"/>
        <about-img class="hideRight"/>
      </div>
      <div class="cardsWrapper">
        <Cards
            :cards="[
            {num:'01',
            title:'Llorem Ipsum',
            text:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
            },
            {num:'02',
            title:'Llorem Ipsum',
            text:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
            },
            {num:'03',
            title:'Llorem Ipsum',
            text:'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
            }
            ]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Text from "@/components/day/about/Text";
import AboutImg from "@/components/day/about/AboutImg";
import Cards from "@/components/day/about/Cards";
import {onMounted} from 'vue'
import scrollAnimate from "@/utils/scrollAnimate";

export default {
  setup() {

    onMounted(() => {
      const text = document.querySelector('#AboutText')
      const aboutImage = document.querySelector('#aboutImageContainer')
      const cards = document.querySelectorAll('.AboutMeCard')
      console.log(cards)
      scrollAnimate(text, aboutImage,...cards)
    })
  },
  name: "about",
  components: {
    Text,
    Cards,
    AboutImg,
  }
}
</script>

<style scoped>
#aboute {
  margin-top: 50px;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cardsWrapper{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
}
@media (max-width: 992px) {
  .row {
    flex-direction: column;
  }

  .row >>> #AboutText {
    order: 2;
    width: 100%;
  }

  .row >>> #aboutImageContainer {
    order: 1;
    width: 100%;

  }

}
@media (max-width: 1000px) {
  .cardsWrapper{
    flex-direction: column;
  }

}
</style>