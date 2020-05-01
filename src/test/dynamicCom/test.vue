<template>
  <div>
    <!-- <my-component v-if="count <= 5" :count="count + 1"></my-component> -->
    <button @click="handleChange('A')">显示A组件</button>
    <button @click="handleChange('B')">显示B组件</button>
    <button @click="handleChange('C')">显示C组件</button>

    <keep-alive>
      <component :is="component"></component>
    </keep-alive>

    <hr>
    <i-button>按钮</i-button>
    <br>
    <i-button to="http://www.baidu.com">超链接</i-button>
    <br>
    <i-button to="http://www.baidu.com" target="_blank">打开新窗口超链接</i-button>
  </div>
</template>

<script>
import componentA from './a'
import componentB from './b'
import componentC from './c'
import IButton from './button'

export default {
  name: 'my-component',
  components: {
    IButton
  },
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      component: componentA
    }
  },
  methods: {
    handleChange (component) {
      let obj = {
        'A': componentA,
        'B': componentB,
        'C': componentC
      }
      this.component = obj[component]
    }
  }
}
</script>

<style>

</style>
