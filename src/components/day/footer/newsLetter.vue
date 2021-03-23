<template>
  <div id="newsLetter">
    <h1>Our Newsletter</h1>
    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
    <form action="">
      <input type="text">
      <button>Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "newsLetter"
}
</script>

<style scoped>
#newsLetter{
  width: 100%;
  max-width: 380px;
  color: white;
}
form{
  height: 40px;

}
input{
  height: 100%;
  padding: 10px 20px;

}
button{
  background: var(--logo-red);
  padding: 10px 20px;
  border: none;
  color: white;
  height: 100%;
}
p,form{
  margin-top: 20px;
}
@media (max-width: 1200px) {
  #newsLetter{
    text-align: center;
    padding-bottom: 30px;
  }
  input{
    max-width: 100%;
  }

}
@media (max-width: 352px) {
  button{
    margin-top: 20px;
  }

}
</style>