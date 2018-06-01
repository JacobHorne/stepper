<template>
  <div>
      <div>
        <transition-group name="fade">
          <!--Step 1-->
          <div class="question" key="1" v-show="step === 'step1'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Are you Experiencing Financial Hardship?</H1>
            </div>
            <div class="button-group">
              <h4>Step: 1 of 10</h4>
              <button @click="stepper('step2')">Yes</button>
              <button class="dark">No</button>
            </div>
          </div>

          <!--Step 2-->
          <div class="question" key="2" v-show="step === 'step2'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your housing status?</H1>
            </div>
            <div class="user_input">
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>Homeowner</option>
                    <option>Renting</option>
                    <option>Full Time</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button-group">
             <h4>Step: 2 of 10</h4>
             <button @click="stepper('step3')">Next</button>
            </div>
          </div>

          <!--Step 3-->
           <div class="question" key="3" v-show="step === 'step3'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is you employment status?</H1>
            </div>
            <div class="button_group">
              <h4>Step: 3 of 10</h4>
              <button @click="stepper('step4')">Next</button>
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
              <button @click="stepper('step5')">Next</button>
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
              <button @click="stepper('step6')">Next</button>
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
              <button @click="stepper('step7')">Next</button>
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
                    <input class="input" type="text" placeholder="Text input">
                  </div>
              </div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
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
                    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
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
              <button @click="stepper('step6')">Next</button>
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
      housing:'',
      userData: {
        housing: this.housing
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
  button{
    padding:1.1em 3em;
    color:white;
    border: 1px solid lightgray;
    font-size:1.2em;
    border-radius:5px;
    margin:0 10px;
    font-weight: 800;
    background:seagreen;
  }
  .question_heading{
    margin:3em 0 3em 0;
  }
  .dark{
    background-color:grayscale($color: #000000)
  }
  .user_input{
    margin:3em auto;
  }
  h1{
    font-size:2.5em !important;
    font-weight: 600;
  }
  h4{
    margin-top:2em;
  }

.fade-leave-active,
.fade-enter-active {
  transition: 0.5s;
  opacity:0;
}
.fade-enter-to{
   transition: opacity .5s;
}
.fade-leave-to {
   transition: opacity .5s;
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
