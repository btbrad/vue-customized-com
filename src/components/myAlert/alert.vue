<!--
 * @Author: btbrad
 * @Date: 2020-07-31 23:45:58
 * @LastEditors: btbrad
 * @LastEditTime: 2020-08-01 22:30:08
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
      content: 'This Is Alert'
    }
  },
  // mounted () {
  //   this.timer = setTimeout(() => {
  //     // this.$destroy()
  //     console.log(this.$el)
  //     document.body.removeChild(this.$el)
  //     console.log(1111111111111111)
  //   }, 3000)
  // },
  methods: {
    // show () {
    //   console.log(11111111111111111111111)
    //   this.isShow = true
    //   setTimeout(() => {
    //     this.hide()
    //   }, this.duration)
    // },
    // hide () {
    //   this.isShow = false
    // }
  },
  beforeDestroy () {
    this.timer = null
  }
}
</script>

<style scoped>
.alert-wrapper {
  width: 300px;
  min-height: 50px;
  border: 1px solid #333;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 5px 5px #ccc;
}
</style>
