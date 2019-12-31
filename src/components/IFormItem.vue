<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
    </div>
    <i v-if="errorMsg" class="errMsg">{{ errorMsg }}</i>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'IFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  created () {
    this.$on('on-item-blur', (val) => {
      this.handleBlurValidate(val)
    })
  },
  methods: {
    handleBlurValidate (val) {
      console.log(this.form)
      let descriptor = { [this.prop]: this.form && this.form.rules[this.prop] }
      const validator = new Schema(descriptor)
      validator.validate({ [this.prop]: this.form.model[this.prop] }).then(success => {
        console.log(success)
        this.errorMsg = ''
      }).catch(error => {
        console.log(error.errors[0].message)
        this.errorMsg = error.errors[0].message
      })
    }
  }
}
</script>

<style>
  .errMsg{
    color: #f40;
  }
</style>
