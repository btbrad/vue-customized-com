<template>
  <div class="i-inpout">
    <input :value="currentValue" :type="type" @input="handleInput" @blur="handleBlur"/>
  </div>
</template>

<script>
import emitter from '@/utils/emitter.js'

export default {
  name: 'IInput',
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  mixins: [emitter],
  methods: {
    handleInput (event) {
      let val = event.target.value
      this.currentValue = val
      this.$emit('input', val)
      this.dispatch('IFormItem', 'on-item-change', val)
    },
    handleBlur () {
      this.dispatch('IFormItem', 'on-item-blur', this.currentValue)
    }
  }
}
</script>

<style>

</style>
