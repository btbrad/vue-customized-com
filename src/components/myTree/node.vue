<template>
  <div class="tree-node">
    <template v-if="node.children">
      <span class="arrow-right" v-if="!expand" @click="toggleCollapse"></span>
      <span class="arrow-down" v-else @click="toggleCollapse"></span>
    </template>
    <input type="checkbox" :name="node.value" id="" v-model="node.checked" @change="handleCheckbox">{{ node.label }}
    <div v-if="node.children" v-show="expand">
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
  },
  data () {
    return {
      expand: true
    }
  },
  watch: {
    'node.children': {
      handler (val) {
        let allChecked = !val.some(child => !child.checked)
        this.node.checked = allChecked
      },
      deep: true
    }
  },
  methods: {
    toggleCollapse (node) {
      this.expand = !this.expand
    },
    handleCheckbox () {
      this.setValue(this.node)
      this.$emit('value-change')
    },
    setValue (obj) {
      if (obj.children) {
        obj.children.forEach(item => {
          item.checked = obj.checked
          this.setValue(item)
        })
      }
    }
  }
}
</script>

<style scoped>
  .tree-node {
    padding-left: 50px;
  }
  span.arrow-right {
    display: inline-block;
    border-left: 8px solid #ccc;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: none;
    position: relative;
    top: -2px;
    cursor: pointer;
  }
  span.arrow-down {
    display: inline-block;
    border-top: 8px solid #ccc;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: none;
    position: relative;
    top: -2px;
    cursor: pointer;
  }
</style>
