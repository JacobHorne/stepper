import Header from './components/Header.vue'
import Questions from './components/Questions.vue'

export const routes = [
  { path : '', component: Questions },
  { path : '/Header', component: Header  },
];