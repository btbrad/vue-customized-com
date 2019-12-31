<template>
  <i-button id="btn1" :size="size" :disabled="disabled" @click.native="handleClick" @on-click="handleOnClick">
    <span slot="icon">😁</span>
    <strong>按钮</strong>
  </i-button>
</template>

<script>
import IButton from '@/components/IButton.vue'

export default {
  components: {
    IButton
  },
  data () {
    return {
      size: 'large',
      disabled: false
    }
  },
  methods: {
    handleClick () {
      alert('点击了IButton组件')
    },
    handleOnClick () {
      alert('捕获了on-click事件')
    }
  }
}
</script>

<style>

</style>
