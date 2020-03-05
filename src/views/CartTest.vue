<template>
  <div>
    CartTest
    <div class="cart">
      <!-- <dot></dot> -->
      <!-- <button ref="btnRef" @click="add">add to cart</button> -->
      <button style="float: right" ref="btnRef" @click="startAnim($event)">add to cart</button>
    </div>
    <!-- <cart-anim ref="ca"></cart-anim> -->
  </div>
</template>

<script>
// import Dot from '@/components/Cart/dot.vue'
import CartAnim from '@/components/CartDemo/CartAnim.vue'
export default {
  name: 'cartTest',
  components: {
    // Dot
    // CartAnim
  },
  methods: {
    add () {
      let pos = {
        x: this.$refs.btnRef.getBoundingClientRect().left,
        y: this.$refs.btnRef.getBoundingClientRect().top
      }
      console.log('按钮位置', pos)
      this.$addToCart.show(pos)
    },
    startAnim (event) {
      // this.$refs.ca.start(event.target)
      const anim = this.$create(CartAnim)
      anim.start(event.target)
      anim.$on('transitionend', anim.remove)
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
