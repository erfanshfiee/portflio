<template>
    <ul id="Controls" class="centerFlex">
      <li @click="change('all')">All</li>
      <li @click="change('app')">APP</li>
      <li @click="change('card')">CARD</li>
      <li @click="change('web')">WEB</li>
    </ul>
</template>

<script>
export default {
  name: "Controls",
  props:['change']
}
</script>

<style scoped>
#Controls{
  justify-content: space-around;
  max-width: 300px;
  margin-top: 30px;
  width: 100%;
}
li{
  list-style-type: none;
  color:#444444;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}
li:hover{
  color:#e82d2d
}
</style>