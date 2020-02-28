<template>
  <div ref="dotRef" class="dot">
    +
  </div>
</template>

<script>
export default {
  name: 'Dot',
  // props: {
  //   posX: {
  //     type: String,
  //     default: () => '0'
  //   },
  //   posY: {
  //     type: String,
  //     default: () => '0'
  //   }
  // },
  methods: {
    show (pos) {
      console.log('小球出现了')
      this.$refs.dotRef.style.left = pos.x + 'px'
      this.$refs.dotRef.style.top = pos.y + 'px'
    }
  },
  beforeDestroy () {

  }
}
</script>

<style lang='less' scoped>
.dot {
  background: #f40;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  animation: 1s linear drop;
}
@keyframes drop {
  from {
  }
  to {
    top: 100%;
  }
}
</style>
