<template>
  <div data-delay="200" id="AboutText">
    <h3 class="title">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="items">
      <div class="item">
        <p class="text"><check/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="item">
        <p class="text"><check/>  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      </div>
      <div class="item">
        <p class="text"><check/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
    <p class="last text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </div>
</template>

<script>
import check from "@/components/svgs/check";
export default {
  name: "Text",
  components:{
    check
  }
}
</script>

<style scoped>
#AboutText{
  width: 49%;
}
h3{
  font-size: 26px;
}
.items{
  line-height: 2rem;
}
.title{
  margin-bottom: 5px;
}
.item{
  display: flex;
  text-indent: 10px;
}
.items:last-child p{
  text-indent: 30px;
}

.item >>> svg{
  color: var(--logo-red);
  width: 20px;
  height: 20px;
  margin-top: 6px;
  /* padding-top: 0px; */
  margin-right: 10px;
  position: relative;
  top: 4px;
}
.last{
  margin-top: 20px;
}

.text{
  line-height: 1.5rem;
}
@media (max-width: 992px) {
  #AboutText{
    margin-top: 40px;
  }

}
</style>