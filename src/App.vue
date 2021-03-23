<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,html{
  font-family: 'open';
  color:var(--body-text-color);
  font-weight: 400;
  font-size: 1rem;
  overflow-x: hidden;
}
p.text{
  font-weight: bold;
}
.title{
  font-family: 'rail';
}
</style>
