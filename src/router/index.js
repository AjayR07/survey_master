import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import formGenerator from '../views/formGenerator.vue'
import viewSurvey from '../views/viewSurvey.vue'
import survey_board from "../views/survey_board";


Vue.use(VueRouter)

let pre='';


const routes = [
  {
    path: pre+'/',
    name: 'Home',
    component: Home
  },

  {
    path: pre+'/FormGenerator',
    name: 'FormGenerator',
    component: formGenerator
  },

  {
    path: pre+'/viewSurvey/:id',
    name: 'viewSurvey',
    component: viewSurvey
  },{
    path: pre+'/survey_board',
    name: 'survey_board',
    component: survey_board
  },

  {
    path: pre+'*',
    name: 'index',
    component: Home
  },


]

const router = new VueRouter({
  mode: 'history',
  base:'survey_master',
  routes
})

export default router
