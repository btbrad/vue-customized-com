<template>
  <div class="tree">
    <div class="tree-node" v-for="(item, index) in currentData" :key="index">
      <tree-node :node="item" @value-change="handleChange"></tree-node>
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
  data () {
    return {
      currentData: [],
      result: []
    }
  },
  created () {
    let data = JSON.parse(JSON.stringify(this.data))
    this.formateData(data)
    this.currentData = data
  },
  watch: {
    currentData: {
      handler (val) {
        this.result = []
        this.handleChange(val)
      },
      deep: true
    }
  },
  methods: {
    formateData (arr) {
      arr.forEach(item => {
        this.$set(item, 'checked', false)
        if (item.children) {
          this.formateData(item.children)
        }
      })
    },
    handleChange (val) {
      this.collectData(val)
      this.$emit('change', this.result)
    },
    collectData (arr) {
      arr.forEach(item => {
        if (item.checked) {
          this.result.push(item.value)
        }
        if (item.children) {
          this.collectData(item.children)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
