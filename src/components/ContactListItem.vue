<template>
  <div class="contact-list-item" @click="$emit('getDetails')">
    <span class="contact-name-item">{{contact.name}}</span>
    <span class="contact-email-item">{{contact.email}}</span>
    <span class="contact-phone-item">{{contact.phone}}</span>
  </div>
</template>

<script>
import {firebase} from '@/db'
  export default {
    name: 'contact-list-item',
    props: ['contact']
  }
</script>
