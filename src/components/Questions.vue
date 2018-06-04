<template>
  <div>
    
      <div class="questions_wrapper">
        <transition-group name="fade">
          <!--Step 1-->
          <div class="question" key="1" v-show="step === 'step1'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Are You Experiencing Financial Hardship?</H1>
            </div>
            <div class="button-group">
              <h4>Step: 1 of 10</h4>
              <a class="button is-success is-large blue" @click="stepper('step2')">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Yes</span>
              </a>
              <a class="button is-large red">
                <span>No</span>
                <span class="icon is-small">
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </div>
           
          </div>

          <!--Step 2-->
          <div class="question" key="2" v-show="step === 'step2'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your housing status?</H1>
            </div>
            <div class="user_input" >
              <div class="control">
                <div class="select is-medium">
                  <select v-model="userData.housing">
                    <option disabled value="">Click To Choose:</option>
                    <option>Renting</option>
                    <option>Homeowner</option>
                    <option>Homeless / Live in a Shelter</option>
                    <option>Living With Family / Friend</option>
                  </select>
                </div>
                <span>housing choice: {{ userData.housing }}</span>
              </div>
            </div>
            <div class="button-group">
             <h4>Step: 2 of 10</h4>
              <button class="button is-large next" @click="stepper('step3')" :disabled="userData.housing ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 3-->
           <div class="question" key="3" v-show="step === 'step3'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is you employment status?</H1>
            </div>
            <div class="user_input" >
              <div class="control">
                <div class="select is-medium">
                  <select>
                    <option>Click To Choose:</option>
                    <option>Employed For Wages</option>
                    <option>Self Employed</option>
                    <option>Our of Work - Looking For Work</option>
                    <option>Student</option>
                    <option>Military</option>
                    <option>Retired</option>
                    <option>Unable To Work</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button_group">
              <h4>Step: 3 of 10</h4>
               <a class="button is-large next" @click="stepper('step4')">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          <!--Step 4-->
           <div class="question" key="4" v-show="step === 'step4'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your marital status?</H1>
            </div>
            <div class="button-group">
              <h4>Step: 4 of 10</h4>
              <a class="button is-large next" @click="stepper('step5')">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          <!--Step 5-->
           <div class="question" key="5" v-show="step === 'step5'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your educational level?</H1>
            </div>
            <div class="button_group">
              <h4>Step: 5 of 10</h4>
               <a class="button is-large next" @click="stepper('step6')">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          <!--Step 5-->
           <div class="question" key="6" v-show="step === 'step6'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your educational level?</H1>
            </div>
            <div class="button_group">
              <h4>Step: 6 of 10</h4>
              <a class="button is-large next" @click="stepper('step7')">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

           <!--Step 6-->
           <div class="question" key="7" v-show="step === 'step7'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Contact Information</H1>
            </div>
            <div class="user_input">
              <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="Text input">
                  </div>
              </div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-success is-medium" type="text" placeholder="Text input" value="bulma">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger is-medium" type="email" placeholder="Email input" value="hello@">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This email is invalid</p>
                </div>
            </div>
            <div class="button_group">
              <h4>Step: 7 of 10</h4>
               <a class="button is-large next" @click="stepper('offers')">
                <span>Click To See Offers</span>
                <span class="icon is-small">
                  <i class="fas fa-star"></i>
                </span>
              </a>
            </div>
          </div>
        </transition-group>

     </div>
  </div> <!--Vue Div-->
</template>







<script>
export default {
  name: 'Questions',
  data () {
    return {
      step: 'step1',
      steps:[],
      userData: {
        housing:''
      },
    }
  },
  methods: {
    stepper(step){
      this.step = step;
    }
  }
}
</script>







<!--CSS Style, Using SCSS -->
<style scoped lang="scss">

  .red{
    background:red;
    color:white;
  }
  .blue{
    background:darkblue;
    color:whit;
    &:hover{
      background:darkblue;
      opacity:0.8;
    }
  }
  .next{
    background-color:darkblue;
    color:white;
  }
  .questions_wrapper{
    max-width:600px;
    margin:0 auto;
  }
  .question_heading{
    margin:2em 0 3em 0;
  }
  .user_input{
    margin:3em auto;
    width:305px;
  }
  h1{
    font-size:2.3em !important;
    font-weight: 600;
    line-height: normal;
  }
  h4{
    margin:1em;
  }
  label{
    text-align:left;
  }

.fade-leave-active,
.fade-enter-active {
  transition: 0.2s;
  opacity:0;
}
.fade-enter-to{
   transition: opacity .2s;
}
.fade-leave-to {
   transition: opacity .2s;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}



  @media only screen and (min-width: 500px) {
    button {
        
    }
  }

  @media only screen and (min-width: 800px) {
    button {
      
    }
  }
</style>
