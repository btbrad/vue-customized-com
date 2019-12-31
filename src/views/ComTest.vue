<template>
  <div style="border: 1px solid #f40; padding: 20px;">
    <h2>ComTest</h2>
    <component-a ref="comA"></component-a>
    <button @click="handleClick">$broadcast</button>
  </div>
</template>

<script>
import ComponentA from '@/components/componentA.vue'
import utils from '@/utils/utils'

export default {
  name: 'ComTest',
  provide: {
    username: 'Brad'
  },
  components: {
    ComponentA
  },
  mixins: [utils],
  created () {
    console.log('组件钩子被调用')
    this.$on('on-dispatch', (val) => {
      console.log('到达了')
      console.log(val)
    })
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.broadcast('grandChild', 'on-message', '我是ComTest')
    }
  },
  mounted () {
    const comA = this.$refs.comA
    console.log('ref', comA)
    console.log(comA.title) // vue.js
    // comA.sayHello() // 弹窗
    console.log('父组件', this.$parent)
    console.log('子组件', this.$children)
  }
}
</script>

<style>

</style>
