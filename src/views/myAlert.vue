<!--
 * @Author: btbrad
 * @Date: 2020-07-31 23:45:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-07-31 23:55:09
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
  name: 'MyAlert',
  methods: {
    handleClick () {
      this.$MyAlert.show()
    }
  }
}
</script>

<style>
</style>
