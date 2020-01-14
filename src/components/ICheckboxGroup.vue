<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '@/utils/assist.js'
import Emitter from '@/utils/emitter.js'

export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  data () {
    return {
      currentValue: this.value,
      children: [] // 存储所有的checkbox
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
  mounted () {
    this.updateModel(true)
  },
  methods: {
    updateModel (update) {
      this.children = findComponentsDownward(this, 'ICheckbox')
      if (this.children) {
        const { value } = this
        this.children.forEach(child => {
          child.model = value
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change (data) {
      console.log(data)
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('IFormItem', 'on-item-change', data)
    }
  }
}
</script>

<style>

</style>
