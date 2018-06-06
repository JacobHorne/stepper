<template>
  <div>
      <div>
        <div class="header">
           <h4 v-if="step <= 6">Step: {{step}} of 7</h4>
           <h4 v-if="step === 'welcome' || step === 'offers'">#FA-{{userData.id}}</h4>
           <img src="../assets/logo.png" @click="step = 1">
        </div>
        <div class="header-fade"></div>
        <div class="header-faded"></div>
       
      </div><!--Vue Div-->
      <div class="questions_wrapper">
        <transition-group name="fade">
          <!--Step 1-->
          <div class="question" key="1" v-show="step === 1">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Are You Experiencing Financial Hardship?</h1>
            </div>
            <div class="button-group">
              <a class="button is-success is-large blue" @click="stepper(2)">
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
          <div class="question" key="2" v-show="step === 2">
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
              <button class="button is-large next" @click="stepper(3)" :disabled="userData.housing ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 3-->
          <div class="question" key="3" v-show="step === 3">
            <div class="question_heading">
              <H1>Employment Information</H1>
            </div>
             <div class="user_input">
              <div class="field">
                  <label class="label">Age</label>
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="Enter Age" v-model.number="userData.age">
                  </div>
              </div>
            </div>
            <div class="user_input" >
              <label class="label">Employment</label>
              <div class="control">
                <div class="select is-medium">
                  <select v-model="userData.employment">
                    <option disabled value="">Click to Choose</option>
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
                    <option disabled value="">Click to Choose</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="button-group">
               <button class="button is-large next" @click="stepper(4)" :disabled="userData.employment === ''  || userData.age === '' || userData.gender === ''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 4-->
          <div class="question" key="4" v-show="step === 4">
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
              <button class="button is-large next" @click="stepper(5)" :disabled="userData.marital ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <!--Step 5-->
          <div class="question" key="5" v-show="step === 5">
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
               <button class="button is-large next" @click="stepper(6)" :disabled="userData.education ===''">
                <span>Next</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

           <!-- Step 6-->
          <div class="question" key="6" v-show="step === 6">
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
               <button class="button is-large next" @click="stepper('welcome')" :disabled="userData.education ===''">
                <span>View Eligble Programs</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>

          <div class="question" key="7" v-show="step === 'welcome'">
              <div class="question_heading welcome">
                <h1 >Welcome, {{userData.first | capitalize}}</h1>
                <h2 >Get Started Today! Your Programs and Benefits Are Ready.</h2>
                <h3>Membership Id: FA-{{userData.id}}</h3>
              </div>
              <div>
                <ul>
                  <li>Start Navigating Your Top Sponsored Programs Below.</li>
                  <li>Click <span style="font-weight:600;">"Show Me Programs"</span> to Learn More About The Next Program.</li>
                </ul>
              </div>

              <div class="button-group">
                <button class="button is-large blue" @click="stepper('offers')">
                  <span>Show Me Programs</span>
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>

              <!-- <div class="welcome-ad"></div> -->
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
                <button @click="nextOffer()" class="button is-large red">
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
      step: 1,
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
        id: Math.floor(1000000 + Math.random() * 900000)
      },
      offers:[
        {title:'Cover Unexpected Repair Costs with a Home Warranty', 
         image: require('../assets/warranty.jpg'), 
         details:`Total Home Protection has a warranty plan for all home owners. For as low as 1 dollar, your home and your wallet are protected. With this one-of-a-kind plan, you’ll never have to worry about financing costly repair.
            
            In the plan, you get the FIRST MONTH FREE + 50% off. Purchase Your Warranty Today and never have to pay for costly repairs on appliances.`, 
         link:'https://totalhomeprotectionquote.com/landing/thp-budget-madrivodisplay50/?imt=1&utm_campaign=Warranty&utm_source=madrivodisplay50&utm_medium=PPC&utm_content=Budget&utm_term=160001.adv2876'},

        {title:'Use HARP – Let The Government Pay For Your Mortgage', 
         image: require('../assets/house-mortgage.jpg'), 
         details:'Details: The Home Affordable Refinance Plan (HARP) was passed to help Americans reduce their monthly payments by as much as $4,264 each year. The program was set to expire in 2017 but has been extended to 2018. Check if you meet the basic eligibility requirements on the official HARP site and see if you’ll get approved.', 
         link:'harpsurvey.com/?sced=0&req_id=97394130&s1=160001&a=23&o=1021'},

        {title:'Save Cash While Settling Your Debt', 
        image: require('../assets/debt.jpg'),
        details:'Talk to a debt counselor and allow them to negotiate better terms you’re your creditors. Accredited Debt can help you get out of debt without bankruptcy while saving cash. They’re BBB+ accredited and an AFCC accredited member for ethical standards.', 
        link:'https://www.acreliefnetwork.com/landing-pages/11/?utm_source=16&utm_campaign=726&dko=8k2019&affiliate_id=16&offer_id=13&subid1=160001&subid2=451304308&subid3=adv2055&subid4=&subid5=&click_id=1423941&request_id=555378&campaign_id=726'},

        {title:'Discount on Car Insurance', 
        image: require('../assets/car-insurance.jpg'),
        details:'View the quotes from hundreds of top insurance companies, save time and save cash on the best policy by as much as 50% of your monthly insurance premiums. The Zebra will help you find better and affordable deals on car insurance costing as little as $27 a month. With the deals from The Zebra, more than 5 million people have saved an average of 368 dollars per year on car insurance premiums.', 
        link:'https://www.thezebra.com/compare/start/vc7901/?utm_source=rbus41&utm_medium=affiliate&utm_campaign=native&channelid=rbus41&subid=160001&subid2=451020278&subid3=adv3297&subid4=&subid5=&subid6=0&adid=1020d9555e07868045689dc5ab6c93'},

        {title:'Save on Life Insurance', 
        image: require('../assets/life-insurance.jpg'),
        details:'The Life Insurance.net team has gone out of the way to source the most affordable yet reliable insurance plans for you. The plans offer coverage from a little as $5K-$1M. And the deal on Life Insurance Plans gets even sweeter; no medical check-ups guaranteed acceptance into the plans, and simply the best-priced plans with a 30-Money back guarantee.', 
        link:'https://app.lifeinsurance.net/landing/life-insurance-tcpa1?utm_source=madrivo&utm_medium=paid&utm_campaign=160001&utm_content=451024691&utm_term=%7Butm_term%7D&offer_id=75&transaction_id=102eff5776d63265cd4872d63acaf7&aff_sub=160001&aff_sub5=&aff_sub3=adv3289&aff_sub2=451024691&aff_sub4='}
      ],
    }
  },
  
  methods: {
    stepper(step){
      this.step = step
    },
    seeOffer(){
      window.open(`https://${this.offers[this.offerCount].link}`)
    },
    nextOffer(){
      this.offerCount++;
    },
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!--CSS Style, Using SCSS -->
<style scoped lang="scss">
  
  .button{
    font-size:1.7em;
    width:100%;
    margin-top:15px;
    max-width: 340px;
    text-align:center;
    opacity:1;
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
    max-width:400px;
    width:80%;
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
      background-color:rgba(120, 135, 208, 0.2);
      font-weight:600;
    }
    ul{
      text-align:left;
    }
  }
  .welcome-ad{
      height: 300px;
      width: 100%;
      background-repeat: no-repeat;
      margin: 1em 0;
      background-position: center;
      background-size: cover;
      background-image: url('../assets/house-mortgage.jpg');
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
      text-align:left;
    }
    p{
      opacity:0.9;
      font-size:0.9em;
    }
  }
  //Header Styles
  .header{
    background-color:white;
    padding:1.3em 1em;
    text-align:left;
    position: relative;
    h4{
      font-weight: 600;
      color:#363636;
      position:absolute;
      right:0;
      top:5px;
    }
    img{
      max-width:200px;
    }
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
