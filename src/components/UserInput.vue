<template>
  <div class="row-half" v-if="mode === 'texthalf'">
    <input type="text" :class="['inputBoxHalf', { invalidForm : isEmpty }]"
      :placeholder="label"
      :value="value"
      @input="returnValue($event.target.value)"/>
  </div>

  <div class="row-full" v-else-if="mode === 'textarea'">
    <textarea rows="5" cols="80"
      :class="{ invalidForm : isEmpty }"
      :placeholder="label"
      :value="value"
      @input="returnValue($event.target.value)"></textarea>
  </div>

  <div class="row-half" v-else-if="mode === 'social'">
    <input type="text"
      :class="['inputBoxHalf', 'iconpadding', { invalidForm : isEmpty }]"
      :value="value"
      @input="returnValue($event.target.value)"/>
    <span class="icon fbico" v-if="platform ==='facebook'" />
    <span class="icon twico" v-if="platform ==='twitter'" />
    <span class="icon instaico" v-if="platform ==='instagram'" />
    <span class="icon linkedinico" v-if="platform ==='linkedin'" />
  </div>

  <div class="row-full" v-else>
    <input type="text"
      :class="['inputBoxFull', { invalidForm : isEmpty }]"
      :placeholder="label"
      :value="value"
      @input="returnValue($event.target.value)"/>
  </div>

</template>

<script>
  export default {
    name: 'user-input',
    data() {
      return {
        isEmpty: true
      }
    },
    props: {
      mode: String,
      label: String,
      platform: String,
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      returnValue(val) {
        this.isEmpty = val ? false : true;
        this.$emit('input', val);
      }
    }
  }
</script>
