<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IFormItem',
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
  created () {
    this.$on('on-item-blur', (val) => {
      console.log(val)
    })
  }
}
</script>

<style>

</style>
