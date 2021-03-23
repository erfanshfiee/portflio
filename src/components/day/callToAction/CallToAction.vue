<template>
  <div id="CallToAction">
    <div class="wrapper maxIs centerFlex extraPadding">
      <h1>Call To Action</h1>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button>Call To Action</button>
    </div>
  </div>
</template>

<script>
export default {
name: "CallToAction"
}
</script>

<style scoped>
  #CallToAction{
    width:100%;
    background: url("/images/image/cta-bg.jpg") fixed center center;
    background-size: cover;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  #CallToAction::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 0;
  }
  .wrapper{
    flex-direction: column;
    line-height: 3.5rem;
    position: relative;
    z-index: 2;
  }
  h1{
    color:white;
    font-weight: bold;
  }
  p{
    text-align: center;
    line-height: 1.8rem;
  color: white;
    font-weight: bold;
  }
  button{
    background: transparent;
    color:white;
    border:2px solid white;
    padding: 12px 40px;
    font-family: Rail;
    font-size: 14px;
    margin-top: 30px;
  }
</style>