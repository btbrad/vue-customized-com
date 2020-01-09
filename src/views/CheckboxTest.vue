<template>
  <i-checkbox v-model="value" :trueValue="1" :falseValue="0" label="agreed" :disabled="true" ></i-checkbox>
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
      value: 0
    }
  }
}
</script>

<style>

</style>
