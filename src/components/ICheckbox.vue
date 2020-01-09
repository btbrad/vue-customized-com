<template>
  <div class="i-checkbox">
    <input type="checkbox" name="" id="i-checkbox" :checked="currentValue" :disabled="disabled" @change="handleChange">
    <label for="i-checkbox">{{ label }}</label>
  </div>
</template>

<script>
import Emitter from '@/utils/emitter.js'
export default {
  name: 'ICheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  created () {
    this.validateValue()
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw new Error('value is not the same to the prop trueValue or false valueVlaue')
      } else {
        this.updateModel()
      }
    }
  },
  methods: {
    validateValue () {
      let valid = false
      if (this.value !== this.trueValue && this.value !== this.falseValue) {
        throw new Error('value is not the same to the prop trueValue or false valueVlaue')
      } else {
        valid = true
      }
      return valid
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    },
    handleChange (event) {
      let checked = event.target.checked
      this.currentValue = checked
      let val = checked ? this.trueValue : this.falseValue
      this.$emit('input', val)
      // 通知form-item校验
      this.dispatch('IFormItem', 'on-item-change', val)
    }
  }
}
</script>

<style>

</style>
