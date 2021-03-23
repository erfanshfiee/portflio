<template>
  <footer id="footer" class="centerFlex">
    <div class="wrapper maxIs centerFlex extraPadding">
      <div class="row centerFlex connectItems extraPadding">
        <connect class="extraMargin" />
        <links class="extraMargin" :items="useFullLinksAdresses" icon="chervon" title="Usefull Links"/>
        <links class="extraMargin" :items="ourServices" icon="chervon" title="Our Services" />
        <news-letter class="extraMargin"/>
      </div>
      <div class="row">
        <div class="hr"></div>
      </div>
      <div class="row centerFlex">
        <copy-right/>
      </div>
    </div>
  </footer>
</template>

<script>
import connect from "@/components/day/footer/connect";
import links from "@/components/day/footer/links";
import newsLetter from "@/components/day/footer/newsLetter";
import copyRight from "@/components/day/footer/copyRight";
export default {
  name: "footers",
  components: {
    connect,
    links,
    newsLetter,
    copyRight
  },
  setup(){
    const useFullLinksAdresses=['Home','About us','Services','Terms of Service','Privacy Policy']
    const ourServices=['Web design','Web Development','Product Management','Marketing','\n' +
    'Graphic Design']
    return{
      useFullLinksAdresses,
      ourServices
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  background: #0c0c0c;
}

.wrapper {
  padding: 50px 0;
  flex-direction: column;
}
.row{
  justify-content: space-between;
  width: 100%;
}
.hr{
  margin-top: 40px;
  height: 1px;
  background: #262626;
  width: 100%;
}
.centerFlex{
  justify-content: center;
}
.connectItems{
  flex-wrap: wrap;
  align-items: flex-start;

  justify-content: space-between;
}
.extraMargin{
  margin-top: 20px;
}
@media (max-width: 1200px) {
  .connectItems{
    justify-content: space-around;
  }

}
</style>