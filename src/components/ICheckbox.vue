<template>
  <div class="i-checkbox">
    <label>
      <span>
        <input
          v-if="group" type="checkbox" :value="label" v-model="model" :disabled="disabled" @change="handleChange">
        <input v-else type="checkbox" :checked="currentValue" :disabled="disabled" @change="handleChange">
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import Emitter from '@/utils/emitter.js'
import { findComponentUpward } from '@/utils/assist.js'

export default {
  name: 'ICheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    // 组合使用时赋值给单个CheckBox的value
    label: {
      type: [String, Number, Boolean]
    }
  },
  created () {
    this.validateValue()
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    if (this.parent) {
      this.group = true
    }
    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  data () {
    return {
      currentValue: this.value,
      group: false, // 是否组合使用
      model: [], // 组合使用时checkbox的value
      parent: null
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
      if (this.disabled) {
        return false
      }
      let checked = event.target.checked
      this.currentValue = checked
      let val = checked ? this.trueValue : this.falseValue
      this.$emit('input', val)
      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', val)
        // 通知form-item校验
        this.dispatch('IFormItem', 'on-item-change', val)
      }
    }
  }
}
</script>

<style>

</style>
