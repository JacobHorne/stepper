<template>
  <div>
      <div class="header">
           <h4 v-if="step <= 6">Step: {{step}} of 7</h4>
           <h4 v-if="step === 'welcome' || step === 'offers'">#FA-{{userData.id}}</h4>
           <img src="../assets/logo.png" @click="step = 1">
        </div>
        <div v-if="step != 'offers'" class="header-fade"></div>
        <div v-if="step != 'offers'" class="header-faded"></div>

      <div class="questions_wrapper">
        <transition-group name="fade">

          <!--Step 1-->
          <div class="question" key="1" v-if="step === 1">
            <h4>Take This 30 Second Survey to Check Your Eligibility For Assistance.</h4>
            <div class="question_heading">
              <h1>Are You Experiencing Financial Hardship?</h1>
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

            <div class="columns front_page_block">
              <div class="column block">
                <span class="icon is-large">
                <i class="far fa-handshake"></i>
                </span>
                <h5>Assistance</h5>
                <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
              </div>
              <div class="column block">
                 <span class="icon is-large" style="font-size:3.5em;text-align:center; color:#084CAD; opacity:0.85;">
                <i class="far fa-edit"></i>
                </span>
                <h5>Enrollment</h5>
                <p>100% free enrollment for qualifying citizens of the United STates who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
              </div>
              <div class="column block">
                 <span class="icon is-large" style="font-size:3.5em;text-align:center; color:#084CAD; opacity:0.85;">
                <i class="far fa-check-square"></i>
                </span>
                <h5>Information</h5>
                <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
              </div>
            </div>
          </div>

          <!--Step 2-->
          <div class="question" key="2" v-if="step === 2">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>What is your housing status?</H1>
            </div>
            <div class="user_input" >
              <div class="control">
                <div class="select is-large">
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
              <div>
                <a class="back" @click="step--">Go Back</a>
              </div>
            </div>
          </div>

          <!--Step 3-->
          <div class="question" key="3" v-if="step === 3">
            <div class="question_heading">
              <H1>Employment Information</H1>
            </div>
            <div class="user_input">
              <div class="field">
                  <label class="label">Age</label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="Enter Age" v-model.number="userData.age">
                  </div>
              </div>
            </div>
            <div class="user_input">
              <label class="label">Employment</label>
              <div class="control">
                <div class="select is-large">
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

            <div class="user_input">
              <label class="label">Gender</label>
              <div class="control">
                <div class="select is-large">
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
              <a class="back" @click="step--">Go Back</a>
            </div>
          </div>

          <!--Step 4-->
          <div class="question" key="4" v-if="step === 4">
            <!-- <h4>Eligibilty will be based on questions</h4> -->
            <div class="question_heading">
              <H1>What is your marital status?</H1>
            </div>

              <div class="user_input" >
              <div class="control">
                <div class="select is-large">
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
              <a class="back" @click="step--">Go Back</a>
            </div>
          </div>

          <!--Step 5-->
          <div class="question" key="5" v-if="step === 5">
            <!-- <h4>Eligibilty will be based on questions</h4> -->
            <div class="question_heading">
              <H1>What is your educational level?</H1>
            </div>
            <div class="user_input" >
             <div class="control">
                <div class="select is-large">
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
              <a class="back" @click="step--">Go Back</a>
            </div>
          </div>

           <!-- Step 6-->
          <div class="question" key="6" v-if="step === 6">
            <h4>Eligibilty will be based on questions</h4>
            <div class="question_heading">
              <H1>Last Step</H1>
            </div>
            <div class="user_input">
              <div class="field">
                  <label class="label">First Name:</label>
                  <div class="control has-icons-left">
                    <input class="input is-large" type="text" placeholder="First Name" v-model="userData.first">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
              </div>
              <div class="field">
                  <label class="label">Last Name:</label>
                  <div class="control has-icons-left">
                    <input class="input is-large" type="text" placeholder="Last Name" v-model="userData.last">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>                    
                  </div>
              </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="john@doe.com" v-model="userData.email">
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
                <span>View Eligible Programs</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
              <a class="back" @click="step--">Go Back</a>
            </div>
          </div>

          <div class="question" key="7" v-if="step === 'welcome'">
              <div class="question_heading welcome">
                <h1 >Welcome, {{userData.first | capitalize}}</h1>
                <h2 >Get Started Today! Your Programs and Benefits Are Ready.</h2>
                <h3>Membership Id: FA-{{userData.id}}</h3>
              </div>
              <div>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="far fa-arrow-alt-circle-right fa-lg"></i></span>Start Navigating Your Top Sponsored Programs Below.</li>
                  <li><span class="fa-li"><i class="far fa-arrow-alt-circle-right fa-lg"></i></span>Click <span style="font-weight:600;">"Show Me Programs"</span> to Learn More About The Next Program.</li>
                </ul>
              </div>
              <div class="button-group">
               <button class="button is-large next" @click="stepper('offers')">
                <span>Show Me Programs</span>
                <span class="icon is-small">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button> 
              <a class="back" @click="step--">Go Back</a>
              </div>
          </div>
          <div class="offer" key="8" v-if="step === 'offers'" v-cloak>
              <div :style="{ backgroundImage : 'url(' + offers[offerCount].image + ')'}" class="ad" id="id"></div>
              <div class="offer_header">
                <h1>{{offers[offerCount].title}}</h1>
              </div> 
              <div class="offer_details">
                 <h2>Benefits:</h2>
                 <div class="benefit"><span class="icon is-small fa-lg"><i class="far fa-check-circle fa-lg"></i></span><span>{{offers[offerCount].benefit.one}}</span></div>
                 <div class="benefit"><span class="icon is-small fa-lg"><i class="far fa-check-circle fa-lg"></i></span><span>{{offers[offerCount].benefit.two}}</span></div>
                 <h2>Details:</h2>
                 <div class="group">
                   <div style="width:40px;float:left;"><span class="icon is-small fa-lg"><i class="far fa-check-circle fa-lg"></i></span></div>
                   <div style="width:82%;float:left;text-align:left;"><span style="margin-left:0;">{{offers[offerCount].details}}</span></div>
                 </div>
              </div>
              <div style="background-color:light-grey;" class="offer-buttons">
                <button @click="seeOffer();" class="button is-large blue">
                  <span>View</span>
                  <span class="icon is-small">
                    <i class="fas fa-window-restore"></i>
                  </span>
                </button>
                <button @click="nextOffer()" class="button is-large red">
                  <span>Next</span>
                  <span class="icon is-small">
                    <i class="fas fa-forward"></i>
                  </span>
                </button>
              </div>
          </div>

          <div key="8" v-if="step === 'final'">
            <div class="question_heading final">
                <h1 >Member Profile</h1>
                
                <div class="final_box">
                  <h3>Name: {{userData.first | capitalize}} {{userData.last | capitalize}}</h3>
                  <h3>Id: #FA-{{userData.id}}</h3>
                  <h3>Email: {{userData.email}}</h3>
                  

                  <!-- <span>Phone</span><div class="field is-horizontal">
                    <div class="field-label is-normal">
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control">
                          <input class="input" type="email" placeholder="Recipient email">
                        </p>
                      </div>
                    </div>
                  </div> -->
              </div>
                <h2>Be on the Lookout for More Offers!</h2>
            </div>
          </div>
         </transition-group>
     </div>

     <div class="tab_container" v-if="step === 'final'">
              <div class="tabs is-centered is-boxed is-medium">
                <ul>
                  <li @click="tabId = 1" :class="{ 'is-active' : tabId == 1 }">
                    <a>
                      <span class="icon is-small"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                      <span>Top</span>
                    </a>
                  </li>
                  <li  @click="tabId = 2" :class="{ 'is-active' : tabId == 2 }">
                    <a>
                      <span class="icon is-small"><i class="fas fa-home" aria-hidden="true"></i></span>
                      <span>Home</span>
                    </a>
                  </li>
                  <li  @click="tabId = 3" :class="{ 'is-active' : tabId == 3 }">
                    <a>
                      <span class="icon is-small"><i class="fas fa-car" aria-hidden="true"></i></span>
                      <span>Auto</span>
                    </a>
                  </li>
                  <li  @click="tabId = 4" :class="{ 'is-active' : tabId == 4 }">
                    <a>
                      <span class="icon is-small"><i class="fas fa-suitcase" aria-hidden="true"></i></span>
                      <span>Travel</span>
                    </a>
                  </li>
                  <li  @click="tabId = 5" :class="{ 'is-active' : tabId == 5 }">
                    <a>
                      <span class="icon is-small"><i class="fas fa-money-bill-alt" aria-hidden="true"></i></span>
                      <span>Financial</span>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Final Page Desktop-->
              <div class="final_desktop" style="max-width:800px;">
                <div class="columns front_page_block" id="final_desktop_block" v-if='tabId === 1'>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/dining.jpg"></a>
                    <h5>Assistance</h5>
                    <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/debt.jpg"></a>
                    <h5>Enrollment</h5>
                    <p>100% free enrollment for qualifying citizens of the United STates who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/opinions.jpg"></a>
                    <h5>Information</h5>
                    <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
                  </div>
                </div>

                <div class="columns front_page_block" id="final_desktop_block" v-if='tabId === 2'>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/debt.jpg"></a>
                    <h5>Assistance</h5>
                    <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/health_screening.jpg"></a>
                    <h5>Enrollment</h5>
                    <p>100% free enrollment for qualifying citizens of the United STates who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/home_repair.jpg"></a>
                    <h5>Information</h5>
                    <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
                  </div>
                </div>

                <div class="columns front_page_block" id="final_desktop_block" v-if='tabId === 3'>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/medicare.jpg"></a>
                    <h5>Assistance</h5>
                    <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/warranty.jpg"></a>
                    <h5>Enrollment</h5>
                    <p>100% free enrollment for qualifying citizens of the United STates who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/home_repair.jpg"></a>
                    <h5>Information</h5>
                    <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
                  </div>
                </div>

                <div class="columns front_page_block" id="final_desktop_block" v-if='tabId === 4'>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/life-insurance.jpg"></a>
                    <h5>Assistance</h5>
                    <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/newday.jpg"></a>
                    <h5>Enrollment</h5>
                    <p>100% free enrollment for qualifying citizens of the United States who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/home_repair.jpg"></a>
                    <h5>Information</h5>
                    <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
                  </div>
                </div>

                <div class="columns front_page_block" id="final_desktop_block" v-if='tabId === 5'>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/medicare.jpg"></a>
                    <h5>Assistance</h5>
                    <p>Providing information on assistance, financial help, government help, individual and family resources, and much more to members throughout the nation. </p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/adt.jpg"></a>
                    <h5>Enrollment</h5>
                    <p>100% free enrollment for qualifying citizens of the United STates who are experiencing financial hardship, and access to community based support, assistance, news, and discussions.</p>
                  </div>
                  <div class="column block">
                     <a href="google.com"><img src="../assets/travel.jpg"></a>
                    <h5>Information</h5>
                    <p>Information on local housing, section 8 / low income housing, housing assistance, government assistance, and rental programs, along with exclusive articles, Third Party Programs, and discounts. </p>
                  </div>
                </div>
              </div>

              <div class="final_mobile">
                <div class="final_mobile_heading">
                  <span class="icon is-medium"><i class="fas fa-thumbs-up" aria-hidden="true"></i></span>
                  <span>Top Offers</span>
                </div>
                  <div class="final_mobile_ad">
                    <h5></h5>
                    <a href="google.com"><img src="../assets/debt.jpg"></a>
                    <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>
                  <div class="final_mobile_ad">
                    <a href="google.com"><img src="../assets/newday.jpg"></a>
                     <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>
               
                 <div class="final_mobile_heading">
                  <span class="icon is-medium"><i class="fas fa-check" aria-hidden="true"></i></span>
                  <span>Home Offers</span>
                </div>
                  <div class="final_mobile_ad">
                    <a href="google.com"><img src="../assets/reverse_mortgage.jpg"></a>
                     <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>
                  <div class="final_mobile_ad">
                    <a href="google.com"><img src="../assets/warranty.jpg"></a>
                     <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>

                   <div class="final_mobile_heading">
                  <span class="icon is-medium"><i class="fas fa-check" aria-hidden="true"></i></span>
                  <span>Financial Offers</span>
                </div>
                  <div class="final_mobile_ad">
                    <a href="google.com"><img src="../assets/discounts.jpg"></a>
                     <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>
                  <div class="final_mobile_ad">
                    <a href="google.com"><img src="../assets/adt.jpg"></a>
                     <p class="final_mobile_ad_text">content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design </p>
                  </div>
             </div>

            </div>
          </div>
  </div> <!--Vue Div-->
</template>


<script>
import axios from 'axios';
export default {
  name: 'Questions',
  data () {
    return {
      step: 1,
      offerCount:0,
      steps:[],
      tabId:1,
      offerGet: 1,
      userData: {
        housing:'',
        employment:'',
        marital:'',
        education:'',
        gender:'',
        email:'',
        phone:'',
        age:'',
        first:'',
        last:'',
        id: Math.floor(1000000 + Math.random() * 900000)
      },
      offers:[
        {title:'Cover Unexpected Repair Costs with a Home Warranty', 
         image: require('../assets/warranty.jpg'), 
         details:`Total Home Protection has a warranty plan for all home owners. For as low as 1 dollar, your home and your wallet are protected. With this one-of-a-kind plan, you’ll never have to worry about financing costly repair. In the plan, you get the FIRST MONTH FREE + 50% off. Purchase Your Warranty Today and never have to pay for costly repairs on appliances.`,
         benefit:{one:'FIRST MONTH FREE + 50% OFF', two:'All Owners Are Eligible'},
         link:'totalhomeprotectionquote.com/landing/thp-budget-madrivodisplay50/?imt=1&utm_campaign=Warranty&utm_source=madrivodisplay50&utm_medium=PPC&utm_content=Budget&utm_term=160001.adv2876'},

        {title:'Use HARP – Let The Government Pay For Your Mortgage', 
         image: require('../assets/house-mortgage.jpg'), 
         details:'Details: The Home Affordable Refinance Plan (HARP) was passed to help Americans reduce their monthly payments by as much as $4,264 each year. The program was set to expire in 2017 but has been extended to 2018. Check if you meet the basic eligibility requirements on the official HARP site and see if you’ll get approved.',
         benefit:{one:'Reduced Payments', two:'Extended to 2018'}, 
         link:'harpsurvey.com/?sced=0&req_id=97394130&s1=160001&a=23&o=1021'},

        {title:'Save Cash While Settling Your Debt', 
        image: require('../assets/debt.jpg'),
        details:'Talk to a debt counselor and allow them to negotiate better terms you’re your creditors. Accredited Debt can help you get out of debt without bankruptcy while saving cash. They’re BBB+ accredited and an AFCC accredited member for ethical standards.',
        benefit:{one:'FIRST MONTH FREE + 50% OFF', two:'All Owners Are Eligible'}, 
        link:'acreliefnetwork.com/landing-pages/11/?utm_source=16&utm_campaign=726&dko=8k2019&affiliate_id=16&offer_id=13&subid1=160001&subid2=451304308&subid3=adv2055&subid4=&subid5=&click_id=1423941&request_id=555378&campaign_id=726'},

        {title:'Discount on Car Insurance', 
        image: require('../assets/car-insurance.jpg'),
        details:'View the quotes from hundreds of top insurance companies, save time and save cash on the best policy by as much as 50% of your monthly insurance premiums. The Zebra will help you find better and affordable deals on car insurance costing as little as $27 a month. With the deals from The Zebra, more than 5 million people have saved an average of 368 dollars per year on car insurance premiums.',
        benefit:{one:'FIRST MONTH FREE + 50% OFF', two:'All Owners Are Eligible'}, 
        link:'thezebra.com/compare/start/vc7901/?utm_source=rbus41&utm_medium=affiliate&utm_campaign=native&channelid=rbus41&subid=160001&subid2=451020278&subid3=adv3297&subid4=&subid5=&subid6=0&adid=1020d9555e07868045689dc5ab6c93'},

        {title:'Save on Life Insurance', 
        image: require('../assets/life-insurance.jpg'),
        details:'The Life Insurance.net team has gone out of the way to source the most affordable yet reliable insurance plans for you. The plans offer coverage from a little as $5K-$1M. And the deal on Life Insurance Plans gets even sweeter; no medical check-ups guaranteed acceptance into the plans, and simply the best-priced plans with a 30-Money back guarantee.',
        benefit:{one:'FIRST MONTH FREE + 50% OFF', two:'All Owners Are Eligible'}, 
        link:'app.lifeinsurance.net/landing/life-insurance-tcpa1?utm_source=madrivo&utm_medium=paid&utm_campaign=160001&utm_content=451024691&utm_term=%7Butm_term%7D&offer_id=75&transaction_id=102eff5776d63265cd4872d63acaf7&aff_sub=160001&aff_sub5=&aff_sub3=adv3289&aff_sub2=451024691&aff_sub4='},
        
        {title:'Grab A Complete Security System For FREE', 
        image: require('../assets/adt.jpg'),
        details:'ADT is committed to helping you protect our home and is offering a complete security for free. Not only will you will be protecting you home and valuables but most homeowners insurance policies will give you an additional discount once it is installed!',
        benefit:{one:'FREE HOME SECURITY SYSTEM', two: `ADDED HOME OWNER'S DISCOUNT`}, 
        link:'installed-security.com/syh6/adt-home-security-systems.php?utm_source=58&utm_promo=197&utm_campaign=161393463003329SP&offerid=33'},
        
        {title:'Save on Medical Costs', 
        image: require('../assets/medicare.jpg'),
        details:'For Seniors, healthcare is essential. The costs of prescriptions continue to rise and almost all seniors take some form of medicine. You may be eligible for extra benefits from your Medicare insurance plan. Check to see if you can cut cost on dental, vision, hearing, even arthritis treatments amongst others.',
        benefit:{one:'LOWER SENIOR MEDICAL COSTS', two:'SAVE ON DENTAL, VISION, AND HEARING'}, 
        link:'medicare-providers.net/plans/index.php?Referrer=MAD2&Subreferrer=161393&utm_source=463004505&utm_medium=email&utm_content=medicare&utm_campaign=27729'},
        
        {title:'Stay Updated On Discounts And Offers', 
        image: require('../assets/discounts.jpg'),
        details:'Join Find Assistance for FREE. Take a 30 second survey and qualify to join. FA will keep you updated on programs and discounts that will save you money.',
        benefit:{one:'FREE AND FAST SURVEY', two:'PROGRAMS AND DISCOUNTS DELIVERED FOR FREE'}, 
        link:'findassistance.org'},

        {title:'Save Cash While Settling Your Debt', 
        image: require('../assets/debt-2.jpg'),
        details:`Talk to a debt counselor and allow them to negotiate better terms youre your creditors. Accredited Debt can help you get out of debt without bankruptcy while saving cash. They're BBB+ accredited and an AFCC accredited member for ethical standards.`,
        benefit:{one:'CONTACT A DEBT COUNSELOR', two:'GET OUT OF DEBT AND AVOID BANKRUPTCY'},
        link:'apply.nationaldebtrelief.com/?src=leadi2&aff_sub=19&aff_sub2=1114018&aff_sub3=161393'},

        {title:'Get Paid For Your Opinions', 
        image: require('../assets/opinions.jpg'),
        details:'Put your free time to work and get paid for sharing your opinion regarding products and services. You fill out the registration and Survey Junkie will match you with surveys that you complete to earn rewards and virtual points that can be redeemed through Paypal or e-Giftcards. Its a fun way to earn in your extra time.',
        benefit:{one:'TURN YOUR TIME INTO $$$', two:'GET PAID FOR YOUR OPINION'}, 
        link:'surveyjunkie.com/lp36?a=140&s1=161393&rid=54969809'},

        {title:'Dining Out Discounts', 
        image: require('../assets/dining.jpg'),
        details: `When you dont feel like cooking here is a list of restaurants that offer senior deals. Keep in mind that some deals and discounts may vary by location and can change without notice.
          - Arby's: 10% discount for those over 55.
          - Chick-fil-a: Free small drink or coffee plus a 10% discount for those 55+
          - Waffle House: 10% meals on Mondays for seniors 60+
          - Burger King: 10% discount for those 60 and older.
          - Steak and Shake: 10% discount on certain days for 55+
          - Captain D's: Discount on select days for seniors 62 and older.
          - McDonald's: Discounts on coffee and beverages (55+)
          - IHOP: 10% discount (55+) and a menu for people aged 55 and over at participating locations
          - Subway: 10% off for seniors 60+
          - Golden Corral: 10% off for seniors 60+
          - Papa John's: Save 25% if you are over 55 or an AARP member
          - Krispy Kreme: 10% discount (50+)
          - Chilis Grill and Bar: 10% discount for seniors 55+
          - Boston Market: 10% discount for seniors 65+
          - Perkins Restaurants: Fifty-Five Plus menu Offers special deals (55+)
          - Carls Jr.: 10% discount on meal or drink.`,
        benefit:{one:'UP TO 25% OFF YOUR FAVORITE RESTAURANTS', two:'OFFERS ONLY FOR 55+'}, 
        link:'http://findassistance.org'},

        {title:'Never Pay For Home Repairs', 
        image: require('../assets/home_repair.jpg'),
        details:`Total Home Protection has a warranty plan for all senior home owners. For as low as 1 dollar, your home and your wallet are protected. With this one-of-a-kind plan, youll never have to worry about financing costly repair.
                 Purchase Your Warranty Today and never have to pay for costly repairs on appliances.`,
        benefit:{one:'PROTECTION FOR YOUR HOME', two:'FIRST MONTH FREE + 50% off'},
        link:'totalhomeprotectionquote.com/landing/thp-em-396/?utm_term=161393&xxc1xx=161393'},

        {title:'Get a Reverse Mortgage', 
        image: require('../assets/reverse_mortgage.jpg'),
        details:`Do you own a home with equity and would like some cash to help cover a couple of your daily expenses? Advisors American Group will help you convert your home equity into tax-free cash. Get your Reverse Mortgage Info Kit and fill it to learn more.`,
        benefit:{one:'USE HOME EQUITY TO PAY FOR BILLS', two:'GET A REVERSE MORTGAGE KIT'},
        link:'offers.lendingtree.com/tla.aspx?tid=reverse2&vid=0-2-3&promo=00541&icode=17180&SpId=m2-reverse-low-40335-95&cpad=1&r=1&esourceid=6245456&cchannel=perf&cproduct=rm&csource=33&cmethod=display&cterm=113997773&800num=hide&siteid=515#/step/1/'},

        {title:'Big Discount On A Walk In Tub', 
        image: require('../assets/walk_in_tub.jpg'),
        details:`These tubs were designed with seniors in mind. If you have any mobility issues you need to learn more about walk in tubs. Click to find out more information and discover the huge discounts being offered by walk in tub manufacturers.`,
        benefit:{one:'A TUB THAT PROMOTES EASE OF USE', two:'SAVE $$ WITH SPECIAL DISCOUNTS'},
        link:'walk-intuboutlet.com/809/?aid2=5290&utm_campaign=5290&oid2=809&s1=161393'},

        {title:'Save On Customized Quality Hearing Aids', 
        image: require('../assets/hearing_aid.jpg'),
        details:`Audicus is here to offer you a solution for your hearing loss. They source their products directly from the manufacturers, which is why the can comfortably offer the best prices in the market. If youre looking for customized, top-of-the-line and affordable hearing aids, then look no further.`,
        benefit:{one:'BEST PRICES ON THE MARKET', two:'TOP OF THE LINE HEARING AIDS'},
        link:'findassistance.org/savingsparade/seniors/rd.php?id=13'},

        {title:'Discounted Early Screening for Stroke & Heart Disease', 
        image: require('../assets/health_screening.jpg'),
        details:`Statistics from the American Stroke Association reveal that 80% of the premature heart attacks and strokes can be prevented if identified early. Life Line Screening is committed to helping restore your peace of mind by detecting the conditions early before they can escalate. That will save you possible high costs of treatment in the future and the inevitable negative impact on your life. Right now you can get a full screening for more than 50% the regular price!`,
        benefit:{one:'50% OFF THE REGULAR PRICE', two:'TAKING THE FIRST STEP IN STROKE PREVENTION'},
        link:''},

        {title:'Travel Discounts for Seniors', 
        image: require('../assets/travel.jpg'),
        details:`Many travel companies from hotels to cruises offer senior discounts. They can vary and change so just ask for what their current offer is. Here are some good ones:
          
          Alamo: Up to 25% off for AARP members.
          Clarion: 20%-30% off (60+)
          Amtrak: 15% off (62+)
          Hyatt Hotels: 25%-50% off (62+)
          Ripley's Believe it or Not: $2 off one-day ticket (55+)
          Myrtle Beach Resort: 10% off (55+)
          Econo Lodge: 20%-30% off (60+)
          Best Western: 10% off (55+)
          SeaWorld Orlando: $3 off one-day tickets (50+)
          Carnival Cruise: Exclusive savings for seniors 55+ (call before booking)
          American Airlines: Various discounts for 65 and up (call before booking)`,
        benefit:{one:'BIG SENIOR ONLY DISCOUNTS', two:'CRUISE AND HOTELS UP TO 50% OFF'},
        link:'google.com'},
      ],
    }
  },
  mounted(){
    axios
    .get('http://findassistance.org/api/get_offer.php', {
      params: {
        step: 1
      }
    })
    .then(response => (console.log(response.data)))
    .catch(error => console.log(error))
  },
  methods: {
    stepper(step){
      this.step = step
      setTimeout(window.scrollTo(0, 0), 2100);
    },
    seeOffer(){
      window.open(`https://${this.offers[this.offerCount].link}`)
    },
    nextOffer(){
      this.offerCount++;


      this.offerGet++; //increment the urlParam
      
      
      if(this.offerCount >= 17){
        this.step = 'final';
      }
      //Call Server to get the Next Set Of Data
      axios
      .get('http://findassistance.org/api/get_offer.php', {
        params: {
          step: this.offerGet
        }
      })
      .then(response => (console.log(response.data)))
      .catch(error => console.log(error))

    },
    tab(id){
      this.tabId = id;
    }
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
      background-image: url('../assets/house-mortgage.svg');
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
</style>
