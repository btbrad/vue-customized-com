<template>
  <button :class="'i-button-'+size" :disabled="disabled" @click="handleClick">
    <slot name="icon"></slot>
    <slot></slot>
    <slot name="suffix">🖐</slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  return validList.includes(value)
}

export default {
  props: {
    size: {
      validator (value) {
        const valid = oneOf(value, ['small', 'large', 'default'])
        return valid
      },
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('on-click', event)
    }
  }
}
</script>

<style>

</style>
