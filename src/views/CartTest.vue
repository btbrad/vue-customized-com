<template>
  <div>
    CartTest
    <div class="cart">
      <!-- <dot></dot> -->
      <button ref="btnRef" @click="add">add to cart</button>
    </div>
  </div>
</template>

<script>
// import Dot from '@/components/Cart/dot.vue'

export default {
  name: 'cartTest',
  // components: {
  //   Dot
  // },``
  methods: {
    add () {
      let pos = {
        x: this.$refs.btnRef.getBoundingClientRect().left,
        y: this.$refs.btnRef.getBoundingClientRect().top
      }
      console.log('按钮位置', pos)
      this.$addToCart.show(pos)
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 1000px;
  border: 1px solid #f40;
  margin: 50px auto;
  height: 500px;
  position: relative;
}
</style>
