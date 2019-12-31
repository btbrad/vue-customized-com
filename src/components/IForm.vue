<template>
  <form class="i-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'IForm',
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
