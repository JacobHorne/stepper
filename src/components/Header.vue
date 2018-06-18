<template>
  <div>
     <h1>This is A MF Route</h1>
  </div>
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
    padding:1.3em 1em;
    text-align:left;
  }
  .header-fade{
    background-color:red;
    color:#2d2d2d;
    height:8px;
    opacity:90%;
  }
  .header-faded{
    background-color:#084CAD;
    height:5px;
    opacity:80%;
  }
  h2{
    margin:0;
  }
  img{
    max-width:200px;
  }
</style>
