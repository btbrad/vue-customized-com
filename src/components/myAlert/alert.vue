<!--
 * @Author: btbrad
 * @Date: 2020-07-31 23:45:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-08-01 16:46:21
 * @Description:
-->
<template>
  <div class="alert-wrapper">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      content: 'this is Alert'
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
