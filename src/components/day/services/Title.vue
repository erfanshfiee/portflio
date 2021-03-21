<template>
  <div class="title centerFlex">
    <div class="bigTitle">
      <h1>SERVICES</h1>
      <span>SERVICES</span>
    </div>
    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
  </div>
</template>

<script>
export default {
  name: "Title"
}
</script>

<style scoped>
.title{
  flex-direction: column;
}
.bigTitle{
  display: flex;
  justify-content: center;
  position: relative;
}
h1{
  font-size: 32px;
  color:#191919;
  z-index: 3;
}
span{
  position: absolute;
  font-size: 52px;
  color:#f4f4f4;
  top: -26px;
}
p{
  margin-top: 20px;
  text-align: center;
}
</style>