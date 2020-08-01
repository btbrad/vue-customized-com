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
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  methods: {
    handleClick () {
      this.$MyAlert.show()
    }
  }
}
</script>

<style>
</style>
