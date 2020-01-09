<template>
  <div class="i-checkbox">
    <input type="checkbox" name="" id="i-checkbox" :checked="value" @change="handleChange">
    <label for="i-checkbox">label</label>
  </div>
</template>

<script>
export default {
  name: 'ICheckbox',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('input', event.target.checked)
    }
  }
}
</script>

<style>

</style>
