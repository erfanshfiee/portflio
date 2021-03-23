<template>
  <div ref="images" id="images">
    <div data-order="0" class="img">
      <img src="/images/image/portfolio/portfolio-1.jpg" alt="">
    </div>
    <div data-order="1" class="img">
      <img src="/images/image/portfolio/portfolio-2.jpg" alt="">
    </div>
    <div data-order='2' class="img">
      <img src="/images/image/portfolio/portfolio-3.jpg" alt="">
    </div>
    <div data-order="3" class="img">
      <img src="/images/image/portfolio/portfolio-4.jpg" alt="">
    </div>
    <div data-order="4" class="img">
      <img src="/images/image/portfolio/portfolio-5.jpg" alt="">
    </div>
    <div data-order="5" class="img">
      <img src="/images/image/portfolio/portfolio-6.jpg" alt="">
    </div>
    <div data-order="6" class="img">
      <img src="/images/image/portfolio/portfolio-7.jpg" alt="">
    </div>
    <div data-order="7" class="img">
      <img src="/images/image/portfolio/portfolio-8.jpg" alt="">
    </div>
    <div data-order="8" class="img">
      <img src="/images/image/portfolio/portfolio-9.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

#images {
  display: flex;
  flex-wrap: wrap;
}

.img {
  width: 33.33%;
  padding: 5px;
}

img {
  width: 100%;
  height: auto;
}

@media (max-width: 1100px) {
  .img {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .img {
    width: 100%;
  }
}
</style>