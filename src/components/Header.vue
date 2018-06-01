<template>
  <div>
     <div class="header">
     <img src="../assets/logo.png">
     </div>
     <div class="header-fade"></div>
     <div class="header-faded"></div>
  </div><!--Vue Div-->
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<!--CSS Style, Using SCSS -->
<style scoped lang="scss">
  .header{
    background-color:white;
    color:White;
    padding:2em 0;
  }
  .header-fade{
    background-color:red;
    color:#2d2d2d;
    height:8px;
    opacity:90%;
  }
  .header-faded{
    background-color:blue;
    height:5px;
    opacity:80%;
  }
  h2{
    margin:0;
  }
  img{
    max-width:200px;
    float:left;
    padding-left:30px;
    dislay:block;
  }
</style>
