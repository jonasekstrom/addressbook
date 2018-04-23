<template>
  <div>
    <router-link to="/add" id="addContactBtn" v-if="isOnline" />
    <div id="list">
      <div class="preloader" v-if="contacts.length === 0 && !isOnline" />
      <div class="emptylist" v-if="contacts.length === 0 && isOnline" />
      <contact-list-item
        v-for="contact in contacts"
        @getDetails="getDetails(contact['.key'])"
        :contact="contact"
        :key="contact['.key']"
        />
    </div>
  </div>
</template>

<script>
  import ContactListItem from './ContactListItem'
  import {firebase} from '@/db'

  export default {
    name: 'home',
    components: {
      ContactListItem
    },
    props: ['isOnline'],
    firebase,
    methods: {
      getDetails(key) {
        if(this.isOnline) {
          this.$router.push(`/detail/${key}`);
        }
      }
    }
  }
</script>

<style>

</style>
