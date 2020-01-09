<template>
  <i-checkbox v-model="value"></i-checkbox>
</template>

<script>
import ICheckbox from '@/components/ICheckbox.vue'

export default {
  name: 'CheckboxTest',
  components: {
    ICheckbox
  },
  data () {
    return {
      value: true
    }
  }
}
</script>

<style>

</style>
