<template>
  <div id="app">
      
      <div class="header">
           <h4 v-if="step <= 6">Step: {{step}} of 7</h4>
           <!-- <h4 v-if="step === 'welcome' || step === 'offers'">#FA-{{userData.id}}</h4> -->
           <img src="./assets/logo.png" @click="step = 1">
      </div>
      <div v-if="step != 'offers'" class="header-fade"></div>
      <div v-if="step != 'offers'" class="header-faded"></div>

      <transition name="fade">
        <router-view></router-view>
      </transition>

   
  </div>
</template>

<script>
import Hardship from './components/Hardship'
import Housing from './components/Housing'
import Employment from './components/Employment'

export default {
  name: 'App',
  components: {
    Hardship,
    Housing,
    Employment
  },
  data () {
    return {
      step:1
    }
  }
}
</script>

<!--CSS Style, Using SCSS -->
<style lang="scss">
   body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .tabs{
    display:none;
  }
  .final_desktop{
    display:none;
  }
  .final_mobile{
    font-size:1.6em;
    color:#084CAD;
    text-align:center;
    max-width: 500px;
    margin:3em auto;
    .final_mobile_heading{
      border: 1px solid #084CAD;
      padding: 5px;
      width: 98%;
      margin: 0 auto;
      background: #f2f5fb;
      border-radius: 2px;
    }
    .final_mobile_ad{
      display: inline-block;
      width:42%;
      margin:2em 0.4em;
    }
    .final_mobile_ad_text{
      text-align: left;
      color: #3d3d3d;
      font-size: 0.6em;
    }
    img{
      min-height:140px;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
    }
  }
  .front_page_block{
    margin:8em auto;
    .block{
      background:white;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
      margin:15px;
      text-align:center;
      > span{
        font-size:3.5em;text-align:center;margin:20px 0; color:#084CAD;opacity:0.85;
      }
      > p{
        text-align:center;
      }
      h5{
        font-size:1.3em;
        margin-bottom:10px;
        font-weight: 600;
      }
    }
  }
   .button{
    font-size:1.7em;
    width:100%;
    margin-top:10px;
    max-width: 370px;
    text-align:center;
    opacity:1;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  }
  .button-group{
    text-align:center;
    margin:4em 0;
    .back{
      color:slategrey; 
      font-weight:600; 
      margin:24px; 
      display:block;
    }
  }
  .red{
    background:red;
    color:white;
    display: block;
    margin:0.5em auto 0 auto;
    >span{
      vertical-align: top;
    }
    &:hover{
      background:red;
    }
  }
  .blue{
    background:#084CAD;
    color:white;
    display: block;
    margin: 0.5em auto 0 auto;
    &:hover{
      background:#084CAD;
    }
  }
  .button[disabled]{
    background:darkgrey;
  }
  .next{
    background-color:#084CAD;
    color:white;
  }
  .questions_wrapper{
    max-width:600px;
    margin:0 auto;
    width:96%;
  }
  .question_heading{
    margin: 1em 0 2em 0;
    text-align:center;
  }
  .user_input{
    margin:1.8em auto;
    width:360px;
  }
  .question li{
    font-size:1.3em;
  }
    h1{
    font-size:2.3em !important;
    font-weight: 600;
    line-height: normal;
    text-align:center;
  }
  h4{
    margin:1em;
    text-align:center;
  }
  ul{
    list-style-type: square;
    max-width:400px;
    width:80%;
    margin:0 auto 2em auto;
    
  }
  label{
    text-align:left;
  }
  select,input{
    box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
    min-width:360px;
    color:#3d3d3d;
    border:none;
  }
  .offer-buttons{
    position:fixed;
    bottom:0;
    width:96%;
    text-align: center;
    max-width:800px;
    background:white;
    .button{
      display: inline-block;
      width:49%;
    }
  }
  .welcome{
    h1{
     margin:10px 0;
     text-align:left;
    }
    h2{
      text-align: left;
      font-size:1.4em;
    }
    h3{
      border-radius: 4px;
      padding:0.8em;
      margin:1em 0;
      font-size:1.3em;
      border:2px dashed red;
      font-weight:600;
    }
  }
  .final{
    margin-top:2em;
    h1{
     margin:10px 0;
     text-align:center;
    }
    h2{
      text-align: center;
      font-size:1.3em;
      margin:1em auto;
    }
    h3{
      border-radius: 4px;
      font-size:1.1em;
      font-weight:600;
      text-align:left;
      margin:0.5em;
    }
    .final_box{
      padding: 1em 2em;
      border: 2px dashed red;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  ul{
      text-align:left;
      list-style-type: none !important;
  }
  .welcome-ad{
      height: 300px;
      width: 100%;
      background-repeat: no-repeat;
      margin: 1em 0;
      background-position: center;
      background-size: cover;
      //background-image: url('../assets/house-mortgage.svg');
  }
  .offer{
    .ad{
      height: 180px;
      width: 100%;
      background-repeat: no-repeat;
      margin: 0em 0;
      background-position: center;
      background-size: cover;
    }
    .offer_header > h1{
      font-size:2em !important;
      margin:1em 0;
      text-align:left;
      font-weight:600;
    }
    .offer_details{
      background-color:white;
      padding:1.5em 2em;
      min-height:400px;
      margin-bottom: 6em;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
      .benefit{
        margin:0.8em 0;
      }
      h2{
        font-size:1.3em;
        font-weight:600;
        margin:10px 0;
      }
      .icon{
        color:#1BDD61;
        vertical-align: middle;
        font-weight:900;
        margin-right: 5px;
      }
      span{
        color:#3d3d3d;
        margin-left:10px;
        font-weight: 600;
        line-height:1.6em;
      }
    }
    p{
      opacity:0.9;
      font-size:0.9em;
    }
  }
  //Header Styles
  .header{
    background-color:white;
    padding: 0.8em 0.5em;
    text-align:left;
    position: relative;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
    h4{
      font-weight: 600;
      color:#363636;
      position:absolute;
      right:0;
      top: -3px;
      font-size: 0.95em;
    }
    img{
      max-width:160px;
    }
  }
  .header-fade{
    background-color:red;
    color:#2d2d2d;
    height:3px;
    opacity:90%;
  }
  .header-faded{
    background-color:#084CAD;
    height:3px;
    opacity:80%;
  }
  h2{
    margin:0;
  }
  .tabs li.is-active a{
    color:white;
    background-color:#084CAD;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: lightslategrey;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: lightslategrey;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: lightslategrey;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: lightslategrey;
  }
@media only screen and (min-width: 500px) {
  .header{
    padding:1.3em 1em;
    img{
      max-width: 200px;
    }
    h4{
      top: 4px;
      font-size: 1.2em;
    }
  }
  .header-fade{
    height:5px;
  }
  .header-fade{
    height:8px;
  }
  .questions_wrapper{
      max-width: 800px;
  }
  .question_heading{
    margin:2em 0;
  }
  .offer{
    .ad{
      height:300px;
      width:100%;
    }
  }
  
}
@media only screen and (min-width: 800px) {
  .tabs{
    display:block;
    margin:0;
  }
  .tab_container{
    margin:4em 0 0 0;
  }
  .final_mobile{
    display:none;
  }
  .final_desktop{
    display:block;
    margin:0 auto;
    text-align: left;
  }
  #final_desktop_block{
    margin:0 auto;
    img{
      min-height: 150px;
    }
  }
}
  //Animation From Step To Step handled by Vuejs <transition></transition>
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
