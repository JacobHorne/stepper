<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <Questions/>
    </div>
  </div> <!-- Vue Div -->
</template>

<script>
import Header from './components/Header'
import Questions from './components/Questions'
export default {
  name: 'App',
  components: {
    Questions,
    Header
  }
}
</script>

<!--CSS Style, Using SCSS -->
<style lang="scss">
body{
  margin:0;
}
h1{
  font-size:1em;
}
h4{
    color:grey;
    font-weight:300;
    font-size:1.2em;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.wrapper{
  width:98%;
  margin:0 auto;
}
</style>
