<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <i-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck" />
      <span>{{ data.title }}</span>
      <div v-if="data.expand">
        <tree-node
          v-for="(item, index) in  data.children"
          :key="index" :data="item"
          :show-checkbox="showCheckbox">
        </tree-node>
      </div>
    </li>
  </ul>
</template>

<script>
import ICheckbox from '@/components/ICheckbox.vue'
import { findComponentUpward } from '@/utils/assist.js'

export default {
  name: 'TreeNode',
  components: {
    ICheckbox
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'Tree')
    }
  },
  watch: {
    'data.children': {
      handler (data) {
        if (data) {
          const checkedAll = !data.some(item => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     * 展开节点
     */
    handleExpand () {
      this.$set(this.data, 'expand', !this.data.expand)

      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    /**
     * 向下更新选中状态
     */
    updateTreeDown (data, checked) {
      this.$set(data, 'checked', checked)
      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked)
        })
      }
    },
    handleCheck (checked) {
      this.updateTreeDown(this.data, checked)

      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data)
      }
    }
  }
}
</script>

<style scoped>
.tree-ul, .tree-li{
  list-style: none;
  padding-left: 20px;
}
.tree-expand{
  cursor: pointer;
}
.i-checkbox {
  display: inline;
}
</style>
