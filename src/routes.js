import Hardship from './components/Hardship.vue'
import Housing from './components/Housing.vue'
import Employment from './components/Employment.vue'

export const routes = [
  { path : '', component: Hardship },
  { path : '/Housing', component: Housing  },
  { path : '/Employment', component: Employment  }
];