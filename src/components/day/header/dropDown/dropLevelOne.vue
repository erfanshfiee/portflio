<template>
    <ul id="dropLevelOne">
      <li>Drop Down 1</li>
      <li>Deep Drop Down</li>
      <li>Drop down 2</li>
      <li>Drop down 3</li>
    </ul>

<!--v-if="open"-->


</template>

<script>
export default {
  name: "dropLevelOne",
  props:['open']
}
</script>

<style scoped>
li{
  list-style-type: none;
  color:#191919
}
ul{
  background: white;
  padding: 10px;
  z-index: 30;
  position: absolute;
  width: 180px;
  color: black;
  left: 0;
  bottom: 0;
  display: none;
  height: max-content;
  line-height: 2.2rem;
  top:100px;
  opacity: 0;
  transition: all 0.3s linear;

}
</style>