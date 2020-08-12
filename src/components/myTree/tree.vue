<template>
  <div class="tree">
    <div class="tree-node" v-for="(item, index) in data" :key="index">
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
  }
}
</script>

<style scoped>

</style>
