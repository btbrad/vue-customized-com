<template>
  <form class="i-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'IForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
