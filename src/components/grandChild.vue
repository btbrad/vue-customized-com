<template>
  <div style="border: 1px solid #f40; padding: 20px;">
    <p>grandChild</p>
    <p>{{msg}}</p>
    <button @click="handleDispatch">$dispatch</button>
  </div>
</template>

<script>
import utils from '@/utils/utils'
export default {
  name: 'grandChild',
  mixins: [utils],
  created () {
    this.$on('on-message', (val) => {
      console.log('111111', val)
      this.msg = val
    })
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleDispatch () {
      this.dispatch('ComTest', 'on-dispatch', 'This is grandChild')
    }
  }
}
</script>

<style>

</style>
