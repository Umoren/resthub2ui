<template>
  <div>
    
      <section class="container"> 
        <b-form v-on:submit.prevent> 
          <b-form-group label="Full Name">
            <b-form-input v-model="contact.name" type="text" required placeholder="Full Name"> </b-form-input>
          </b-form-group>
          <b-form-group label="Enter Email">
            <b-form-input v-model="contact.email" type="email" required placeholder="Enter Email"> </b-form-input>
          </b-form-group>
          <b-form-group label="Phone Number">
            <b-form-input v-model="contact.phone" type="tel" required placeholder="Phone Number"> </b-form-input>
          </b-form-group>  
          <b-form-group label="gender">
            <b-form-select v-model="contact.gender" :options="sex" required> </b-form-select>
          </b-form-group>
          <b-button type="submit" v-on:click="contactSubmitted" variant="primary"> Submit </b-button>
          <b-button type="submit" class="ml-5" v-on:click="contactReset" variant="danger"> Reset </b-button>
          <router-link class="btn btn-primary" role="button" to="/view"> View all Contacts here</router-link>
        </b-form> 

        <b-card class="mt-3" header="This is what you are submitting to the server">
          <pre class="m-0"> {{ contact }} </pre>
        </b-card>
      </section>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "AddContacts",
  data() {
    return {
      contact: {
        name: "", 
        email: " ",      
        phone: "",
        gender: null
      },
      sex: [{ text: "Select One", value: null}, "Male", "Female", "Other"]
    }
  },
  methods: {
    contactSubmitted() {
      let newContact = {
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone,
        gender: this.contact.gender
      };

      axios.post("https://resthub2.herokuapp.com/api/contacts", newContact)
        .then(response => console.log(response))
    },
    contactReset(evt) {
      evt.preventDefault()

      //reset values
      this.contact.name = "",
      this.contact.email = "",
      this.contact.phone = "",
      this.contact.gender = ""
    }
  }
}
</script>