<template>
  <div>
    <header>
      <app-header />
    </header>
    <!-- <add-contact> </add-contact> -->
    <router-view></router-view>
  </div>
</template>

<script>

import addContacts from '@/components/addContacts.vue'
import viewContacts from "@/components/viewContacts.vue"
import AppHeader from "@/components/AppHeader.vue"
export default {
  components: {
    'add-contact': addContacts,
    "view-contact": viewContacts,
    "app-header": AppHeader 
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
