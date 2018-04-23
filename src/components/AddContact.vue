<template>
  <div>
    <router-link to="/" id="cancelBtn" />
    <a href="#" id="saveBtn" @click.prevent="saveData" v-if="isOnline" ></a>
    <div class="add-form">
      <!-- Form fields go here -->
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
  import UserInput from './UserInput'
  import {firebase} from '@/db'

  export default {
    name: 'add-contact',
    components: {
      UserInput
    },
    props: ['isOnline'],
    data() {
      return {
        contact: {
          name: '',
          email: '',
          phone: '',
          address: '',
          fbHandle: '',
          twitterHandle: '',
          instaHandle: '',
          linkedinHandle: ''
        }
      }
    },
    firebase,
    methods: {
      clearOut() {
        for(let item in this.contact) {
          this.contact[item] = '';
        }
      },
      saveData() {
         if(this.isOnline && this.contact.name !== '' && this.contact.email !== '' && this.contact.phone !== '') {
          // Save data to Firebase Realtime Database
          this.$firebaseRefs.contacts.push(this.contact);
          this.clearOut();
          this.$router.push('/');
        } else {
          alert('Name, Adress and Phone must be filled');
        }
      }
    }
  }
</script>
