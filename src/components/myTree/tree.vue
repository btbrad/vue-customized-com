<template>
  <div class="tree">
    <div class="tree-node" v-for="(item, index) in currentData" :key="index">
      <tree-node :node="item"></tree-node>
    </div>
  </div>
</template>

<script>
import TreeNode from './node'

export default {
  name: 'MyTree',
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentData () {
      return this.data.map(item => {
        this.$set(item, 'checked', false)
        return item
      })
    }
  }
}
</script>

<style scoped>

</style>
