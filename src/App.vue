<template>
  <div id="addressbook-app">
    <h2 id="title">Address Book</h2>
    <div class="offline-note" v-if="!isOnline">{{statusMessage}}</div>
    <keep-alive>
      <router-view :isOnline="isOnline" />
    </keep-alive>
  </div>
</template>

<script>
  import {isConnected} from './db'
  export default {
    name: 'app',
    data() {
      return {
        isOnline: false,
        statusMessage: 'Loading....'
      }
    },
    created() {
      isConnected.on('value', status => {
        if(status.val()) {
          this.isOnline = true;
          this.statusMessage = "We're offline at the moment!";
        } else {
          this.isOnline = false;
        }
      });
    }
  }
</script>

<style>
  @import "../static/css/address-book.css";
</style>
