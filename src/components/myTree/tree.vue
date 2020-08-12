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
      currentData: []
    }
  },
  created () {
    let data = JSON.parse(JSON.stringify(this.data))
    this.formateData(data)
    this.currentData = data
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
    handleChange () {
      this.currentData.reduce((a, b) => {
        if (b.checked) {

        }
      }, [])
    }
  }
}
</script>

<style scoped>

</style>
