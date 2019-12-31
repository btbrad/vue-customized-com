<template>
  <div class="i-inpout">
    <input :value="value" type="text" @input="handleInput" @blur="handleBlur"/>
  </div>
</template>

<script>
import utils from '@/utils/utils.js'

export default {
  name: 'IInput',
  data () {
    return {

    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mixins: [utils],
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleBlur (event) {
      this.dispatch('IFormItem', 'on-item-blur', event.target.value)
    }
  }
}
</script>

<style>

</style>
