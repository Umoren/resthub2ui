<template>
    <div>
        <section class="container"> 
            <table class="table table-striped table-responsive-sm" >
            <thead>
                <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody v-for="contact in contacts" :key="contact._id">
                <tr >
                    
                    <td scope=""> {{contact.name}}</td>
                    <td> {{contact.email}}</td>
                    <td> {{contact.phone}}</td>
                    <td> {{contact.gender}}</td>
                    
                </tr>
            </tbody>
        </table>
            
        </section>        
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "viewContacts",
    data(){
        return {
            contacts: []
        }
    },
    methods: {
        getContacts() {
            axios.get("https://resthub2.herokuapp.com/api/contacts/:id")
            .then(response => {
                this.contacts = response.data
                console.log(this.contacts);
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        this.getContacts();
    }
}
</script>
