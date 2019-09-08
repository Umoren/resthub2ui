import Vue from 'vue'
import Router from 'vue-router'
import addContacts from "@/components/addContacts"
import viewContacts from "@/components/viewContacts"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
    path: '/',
    name: "addContacts",
    component: addContacts
   },
   {
     path: "/view",
     name: "viewContacts",
     component: viewContacts
   }
  ]
})
