<template>
<div id="copyRight" class="centerFlex">
  <p>© Copyright <span>DAY</span>. All Rights Reserved</p>
  <p>developed by <span>erfan shafiee</span></p>
</div>
</template>

<script>
export default {
  name: "copyRight"
}
</script>

<style scoped>
.centerFlex{
  flex-direction: column;
  color: white;
  line-height: 1.8rem;
  margin-top: 30px;
}
#copyRight span:nth-child(1){
  font-weight: bold;
}
#copyRight span:nth-child(2){
  color: red;
}
</style>