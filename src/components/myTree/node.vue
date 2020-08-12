<template>
  <div class="tree-node">
    <input type="checkbox" :name="node.value" id="">{{ node.label }}
    <div v-if="node.children">
      <tree-node v-for="(item, index) in node.children" :key="index"  :node="item"></tree-node>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-node',
  props: {
    node: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
