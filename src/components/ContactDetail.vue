<template>
  <div v-if="contact">
    <span id="deleteBtn">Close to save changes</span><a href="#" id="cancelBtn" @click.prevent="updateContact(id)" />
   
    <div class="contact-detail-pane">
      <user-input label="Name" v-model="contact.name" />
      <user-input mode="texthalf" label="E-Mail" v-model="contact.email" />
      <user-input mode="texthalf" label="Phone" v-model="contact.phone" />
      <user-input mode="textarea" label="Address" v-model="contact.address" />
      <user-input mode="social" platform="facebook" v-model="contact.fbHandle" />
      <user-input mode="social" platform="twitter" v-model="contact.twitterHandle" />
      <user-input mode="social" platform="instagram" v-model="contact.instaHandle" />
      <user-input mode="social" platform="linkedin" v-model="contact.linkedinHandle" />

      </div>
    </div>
</template>

<script>
  import {firebase} from '@/db'
  import UserResponse from './UserResponse'
  import UserInput from './UserInput'

  export default {
    name: 'contact-detail',
    props: ['isOnline', 'id'],
    components: {
      UserResponse,
      UserInput
    },
    data() {
      return {
        contacts: [],
        contact: {},
        showDeleteDialog: false
      }
    },
    firebase,
    created() {
      this.getData();
    },
    watch: {
      contacts: 'getData',
      '$route': 'getData'
    },
    methods: {
      getData() {
        let contact = this.contacts.filter(item => {
          return item['.key'] === this.id;
        });

        if(contact.length > 0) {
          this.contact = contact[0];
        } else {
          this.$router.push('/');
        }
      },
      updateContact(key) {
        
         if(this.isOnline && this.contact.name !== '' && this.contact.email !== '' && this.contact.phone !== ''){
          this.$firebaseRefs.contacts.child(key).update({
            "address": this.contact.address,
            "email": this.contact.email,
            "phone": this.contact.phone,
            "name": this.contact.name,
            "fbHandle": this.contact.fbHandle,
          "twitterHandle": this.contact.twitterHandle,
          "instaHandle": this.contact.instaHandle,
          "linkedinHandle": this.contact.linkedinHandle
          });
           this.$router.push('/');
        }else {
          alert('Name, Adress and Phone must be filled');
        }
       
      }
    }
  }
</script>
