<template>
  <header class="centerFlex">
    <div class="centerFlex wrapper maxIs extraPadding">
      <Logo/>
      <Menu/>
      <ham-menu/>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/day/header/Logo";
import Menu from "@/components/day/header/Menu";
import hamMenu from "@/components/day/header/hamMenu";
export default {
  name: "Header",
  components: {
    Logo,
    Menu,
    hamMenu
  }
}
</script>

<style scoped>
header {
  background: rgba(25, 25, 25, 0.95);
  height: 70px;
}

div {
  justify-content: space-between;
  height: 100%;
}

</style>