<template>
  <div>
    <InputNumber v-model="value" />
    <InputNumber :value="value" @input="handleChange" />
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber.vue'

export default {
  components: {
    InputNumber
  },
  data () {
    return {
      value: 1
    }
  },
  methods: {
    handleChange (val) {
      this.value = val
    }
  }
}
</script>

<style>

</style>
