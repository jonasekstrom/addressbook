<template>
  <div class="user-response">
    <div class="user-response-dialog">
      <span class="user-response-message"><slot>Do you agree?</slot></span>
      <a href="#" id="user-response-confirm" @click.prevent="$emit('agree')">Yes</a>
      <a href="#" id="user-response-cancel" @click.prevent="$emit('disagree')">No</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-response'
  }
</script>
