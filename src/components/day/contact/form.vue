<template>
  <form action="" class="centerFlex hideScale" id="submit">
    <div class="row">
      <Input element="input" label="your name"/>
      <Input element="input" label="your email"/>
    </div>
<div class="textArea">
  <Input label="Subject" element="textArea"/>
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

.textArea{
  width: 100%;
}
button{
  padding: 20px 10px;
  border:0;
  color:white;
  font-size: 15px;
  background: #cc1616;
  font-weight: bold;
}
>>>textarea
@media (max-width: 530px) {
  .row{
    flex-direction: column;
  }
  form{
    width: 100%;
  }
}
</style>