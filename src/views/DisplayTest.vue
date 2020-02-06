<template>
  <div>
    <h3>动态渲染.vue文件的组件--Display</h3>
    <Display :code="code"></Display>
  </div>
</template>

<script>
import Display from '@/components/Display.vue'
import testcode from '@/utils/testcode.js'

export default {
  name: 'DisplayTest',
  components: {
    Display
  },
  data () {
    return {
      code: testcode
    }
  }
}
</script>

<style>

</style>
