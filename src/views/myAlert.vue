<!--
 * @Author: btbrad
 * @Date: 2020-07-31 23:45:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-08-01 16:37:06
 * @Description:
-->
<template>
  <div>
    <h2>MyAlert</h2>
    <button @click="handleClick1">10秒测试</button>
    <button @click="handleClick2">3秒Alert</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  methods: {
    handleClick1 () {
      this.$MyAlert.show({
        content: '测试',
        duration: 10000
      })
    },
    handleClick2 () {
      this.$MyAlert.show({
        content: 'Alert',
        duration: 3000
      })
    }
  }
}
</script>

<style>
</style>
