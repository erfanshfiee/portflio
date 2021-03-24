<template>
  <form action="" class="centerFlex hideScale" id="submit">
    <div class="row">
      <Input label="your name"/>
      <Input label="your email"/>
    </div>
    <Input label="subject"/>
<div class="textArea">
      <textarea placeholder="Message">

    </textarea>
</div>
    <button>Send Message</button>

  </form>
</template>

<script>
import Input from "@/components/ul/Input";
export default {
  name: "form",
  components:{
    Input
  }
}
</script>

<style scoped>
form,.row{
  width: 100%;
}
.row{
  display: flex;
}
form{
  padding: 10px;
  width: 700px;
  box-shadow: 0 0 30px rgba(214 ,215, 216, 0.6);
}
.centerFlex{
  flex-direction: column;
}
textarea{
  width: 100%;
  height: 150px;
  border: 1px solid #ced4da;
padding: 15px 15px;
}
.textArea{
  width: 100%;
  padding: 10px;
}
button{
  padding: 20px 10px;
  border:0;
  color:white;
  font-size: 15px;
  background: #cc1616;
  font-weight: bold;
}
@media (max-width: 530px) {
  .row{
    flex-direction: column;
  }
  form{
    width: 100%;
  }
}
</style>