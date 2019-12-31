<template>
  <div style="border: 1px solid #f40; padding: 20px;">
    <h2>ComponentA</h2>
    <span>祖先的username:{{username}}</span>
    <br>
    <span>根组件的title:{{app.title}}</span>
    <br>
    <grand-child></grand-child>
  </div>
</template>

<script>
import GrandChild from './grandChild'
export default {
  name: 'ComponentA',
  components: {
    GrandChild
  },
  created () {
    this.$on('on-message', (val) => {
      console.log(val)
    })
  },
  inject: ['username', 'app'],
  data () {
    return {
      title: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      window.alert('Hello')
    }
  }
}
</script>

<style>

</style>
