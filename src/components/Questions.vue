<template>
  <div>
      <div class="questions_wrapper">
        <transition-group name="fade">
          <!--Step 1-->
          <div class="question" key="1" v-show="step === 'step1'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Are You Experiencing Financial Hardship?</h1>
            </div>
            <div class="button-group">
              <h4>Step: 1 of 7</h4>
              <a class="button is-success is-large blue" @click="stepper('step2')">
              <span>Yes</span>
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
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
              </div>
            </div>
            <div class="button-group">
             <h4>Step: 2 of 7</h4>
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
            <div class="question_heading">
              <H1>Employment Information</H1>
            </div>
             <div class="user_input">
              <div class="field">
                  <label class="label">Age</label>
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="ex:29" v-model="userData.age">
                  </div>
              </div>
            </div>
            <div class="user_input" >
              <label class="label">Employment</label>
              <div class="control">
                <div class="select is-medium">
                  <select v-model="userData.employment">
                    <option disabled value="">Status:</option>
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
             <div class="user_input" >
              <div class="control">
                <label class="label">Gender:</label>
                <div class="select is-medium">
                  <select v-model="userData.gender">
                    <option disabled value="">Gender:</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button-group">
              <h4>Step: 3 of 7</h4>
               <button class="button is-large next" @click="stepper('step4')" :disabled="userData.employment === ''  || userData.age === '' || userData.gender === ''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 4-->
          <div class="question" key="4" v-show="step === 'step4'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your marital status?</H1>
            </div>

              <div class="user_input" >
              <div class="control">
                <div class="select is-medium">
                  <select v-model="userData.marital">
                    <option disabled value="">Click To Choose:</option>
                    <option>Single</option>
                    <option>In A Relationship</option>
                    <option>Married or Domestic Partnership</option>
                    <option>Divorced</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button-group">
              <h4>Step: 4 of 7</h4>
              <button class="button is-large next" @click="stepper('step5')" :disabled="userData.marital ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 5-->
          <div class="question" key="5" v-show="step === 'step5'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your educational level?</H1>
            </div>
            <div class="user_input" >
             <div class="control">
                <div class="select is-medium">
                  <select v-model="userData.education">
                    <option disabled value="">Click To Choose:</option>
                    <option>Did Not Graduate High School</option>
                    <option>High School Diploma / GED</option>
                    <option>Some College Completed</option>
                    <option>Graduated College</option>
                    <option>Graduated Degree Or Above</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button-group">
              <h4>Step: 5 of 7 </h4>
               <button class="button is-large next" @click="stepper('step6')" :disabled="userData.education ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

           <!-- Step 6-->
          <div class="question" key="6" v-show="step === 'step6'">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Last Step</H1>
            </div>
            <div class="user_input">
              <div class="field">
                  <label class="label">First Name:</label>
                  <div class="control has-icons-left">
                    <input class="input is-medium" type="text" placeholder="First Name" v-model="userData.first">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
              </div>
              <div class="field">
                  <label class="label">Last Name:</label>
                  <div class="control has-icons-left">
                    <input class="input is-medium" type="text" placeholder="Last Name" v-model="userData.last">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>                    
                  </div>
              </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-medium" type="email" placeholder="john@doe.com" v-model="userData.email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <!-- <i class="fas fa-exclamation-triangle"></i> -->
                    </span>
                  </div>
                  <!-- <p class="help is-danger">This email is invalid</p> -->
                </div>
            </div>
            <div class="button-group">
              <h4>Step: 7 of 7</h4>
               <button class="button is-large next" @click="stepper('welcome')" :disabled="userData.education ===''">
                <span>Go To Offers</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <div class="question" key="7" v-show="step === 'welcome'">
              <div class="question_heading">
                <h1 >Welcome, {{userData.first}}</h1>
                <h2>Get Started Today! Your Programs and Benefits Are Ready.</h2>
              </div>

              <div>
                <ul>
                  <li>Start Navigating Your Top Sponsored Programs Below.</li>
                  <li>Click "Show Me Offers" to Learn More About The Programs.</li>
                </ul>
              </div>


              <div class="button-group">
                <button class="button is-large blue" @click="stepper('offers')">
                  <span>Show Me Offers</span>
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
          </div>
          <div class="offer" key="8" v-show="step === 'offers'">
              <div class="offer_header">
                <h1>{{offers[offerCount].title}}</h1>
                <p>{{offers[offerCount].details}}</p>
              </div>
              <div :style="{ backgroundImage : 'url(' + offers[offerCount].image + ')'}" class="ad"></div> 
              <div class="offer-buttons">
                <button @click="seeOffer();" class="button is-large blue">
                  <span>View</span>
                  <span class="icon is-small">
                    <i class="fas fa-check"></i>
                  </span>
                </button>
                <button @click="offerNext()" class="button is-large red">
                  <span>Next</span>
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
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
      offerCount:0,
      steps:[],
      userData: {
        housing:'',
        employment:'',
        marital:'',
        education:'',
        gender:'',
        email:'',
        age:'',
        first:'',
        last:'',
      },
      offers:[
        {title:'Use HARP – Let The Government Pay For Your Mortgage', 
         image: require('../assets/house-mortgage.jpg'), 
         details:'Details: The Home Affordable Refinance Plan (HARP) was passed to help Americans reduce their monthly payments by as much as $4,264 each year. The program was set to expire in 2017 but has been extended to 2018. Check if you meet the basic eligibility requirements on the official HARP site and see if you’ll get approved.', 
         link:'harpsurvey.com/?sced=0&req_id=97394130&s1=160001&a=23&o=1021'},

        {title:'21 Senior Discounts', 
        image: require('../assets/senior.jpg'),
        details:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', 
        link:'yahoo.com'},

        {title:'NewDayUSA Offer', 
        image: require('../assets/newday.jpg'),
        details:'consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh', 
        link:'www.espn.com'}
      ],
    }
  },
  methods: {
    stepper(step){
      this.step = step;
    },
    seeOffer(){
      window.open(`https://${this.offers[this.offerCount].link}`)
    },
    offerNext(){
      this.offerCount++;
      var element = document.getElementsByClassName("ad");
      // element.classList.add("hidden");
    }
  }
}
</script>







<!--CSS Style, Using SCSS -->
<style scoped lang="scss">
  .button{
    font-size:1.8em;
    width:80%;
    margin-top:15px;
    max-width: 305px;
    text-align:center;
  }
  .button-group{
    text-align:center;
  }
  .red{
    background:red;
    color:white;
    &:hover{
      background:red;
      opacity:0.8;
    }
  }
  .blue{
    background:#084CAD;
    color:white;
    &:hover{
      background:#084CAD;
      opacity:0.8;
    }
  }
  .button[disabled]{
    opacity:0.7;
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
    margin:2em 0 3em 0;
    text-align:center;
  }
  .user_input{
    margin:1.8em auto;
    width:305px;
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
    width:400px;
    margin:0 auto 2em auto;
    
  }
  label{
    text-align:left;
  }
  select,input{
    border: 2px solid #363636;
    min-width:305px;
    color:lightslategray;
  }
  .offer-buttons{
    position:fixed;
    bottom:0;
    width:100%;
    .button{
      float:left;
      width:50%;
    }
  }
  .offer{
    .ad{
      height: 300px;
      width: 100%;
      background-repeat: no-repeat;
      margin: 1em 0;
      background-position: center;
      background-size: cover;
    }
    h1{
      font-size:1.6em !important;
      margin:1em 0;
    }
    p{
      opacity:0.9;
      font-size:0.9em;
    }
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
  button {
        
  }
}

@media only screen and (min-width: 800px) {
  button {
    }
}
</style>
